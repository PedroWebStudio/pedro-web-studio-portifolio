"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DEMO_URL = "/demonstracoes/burger-lab";

const FRAME_H = 400;

const devices = [
  {
    label: "Desktop",
    viewportW: 1280,
    frameW: 560,
    chrome: true,
    delay: 0,
  },
  {
    label: "Tablet",
    viewportW: 768,
    frameW: 300,
    chrome: false,
    rounded: "rounded-[18px]",
    border: "border-[3px]",
    delay: 0.15,
  },
  {
    label: "Mobile",
    viewportW: 390,
    frameW: 168,
    chrome: false,
    rounded: "rounded-[24px]",
    border: "border-[4px]",
    delay: 0.3,
  },
];

function DevicePreview({
  d,
}: {
  d: (typeof devices)[number];
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameW, setFrameW] = useState(d.frameW);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w > 0) setFrameW(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = frameW / d.viewportW;
  const iframeH = Math.round(FRAME_H / scale);

  return (
    <div
      ref={frameRef}
      className="relative w-full overflow-hidden"
      style={{ maxWidth: d.frameW }}
    >
      <div className="absolute -inset-3 rounded-2xl bg-[#D4AF37]/5 blur-xl" />

      {d.chrome ? (
        <div className="relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/60">
          <div className="flex items-center gap-1.5 border-b border-zinc-700/80 bg-zinc-800/90 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <div className="mx-2 flex min-w-0 flex-1 items-center gap-1 rounded-md bg-zinc-700/60 px-2 py-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-2.5 w-2.5 shrink-0 text-zinc-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <span className="truncate text-[9px] text-zinc-500">pedrowebstudio.com.br</span>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: FRAME_H }}>
            <iframe
              src={DEMO_URL}
              title="Preview Desktop"
              className="absolute left-0 top-0 border-0"
              style={{
                width: d.viewportW,
                height: iframeH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                pointerEvents: "none",
              }}
              scrolling="no"
              tabIndex={-1}
            />
          </div>
        </div>
      ) : (
        <div
          className={`relative overflow-hidden ${d.rounded} ${d.border} border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/60`}
          style={{ height: FRAME_H }}
        >
          {d.label === "Mobile" && (
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-zinc-800" />
          )}
          <iframe
            src={DEMO_URL}
            title={`Preview ${d.label}`}
            className="absolute left-0 top-0 border-0"
            style={{
              width: d.viewportW,
              height: iframeH,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
            scrolling="no"
            tabIndex={-1}
          />
        </div>
      )}
    </div>
  );
}

export default function Responsive() {
  return (
    <section id="responsividade" className="overflow-x-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Responsividade
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Seu site em qualquer tela.
          </h2>
          <p className="text-base leading-7 text-zinc-400">
            Cada projeto é desenvolvido pensando em desktop, tablet e celular.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-center lg:gap-6">
          {devices.map((d) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: d.delay }}
              className="flex w-full min-w-0 flex-col items-center gap-4 lg:w-auto"
              style={{ maxWidth: d.frameW }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + d.delay * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: d.delay,
                }}
                className="flex w-full min-w-0 flex-col items-center gap-4"
              >
                <DevicePreview d={d} />
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {d.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
