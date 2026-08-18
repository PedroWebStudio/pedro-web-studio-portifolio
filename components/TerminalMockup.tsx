"use client";

import { useEffect, useState } from "react";

type Line =
  | { type: "cmd"; text: string }
  | { type: "output"; text: string; color?: string };

const LINES: Line[] = [
  { type: "cmd", text: "npx create-next-app meu-site" },
  { type: "output", text: "✓ TypeScript", color: "#4ADE80" },
  { type: "output", text: "✓ Tailwind CSS", color: "#4ADE80" },
  { type: "output", text: "✓ App Router", color: "#4ADE80" },
  { type: "cmd", text: "npm run dev" },
  { type: "output", text: "▶ ready on http://localhost:3000", color: "#D4AF37" },
  { type: "cmd", text: "git add . && git commit -m \"feat: novo site\"" },
  { type: "output", text: "✓ 1 commit criado", color: "#4ADE80" },
  { type: "cmd", text: "git push origin main" },
  { type: "output", text: "✓ deployed → vercel.com/meu-site", color: "#4ADE80" },
];

const CHAR_SPEED = 38;   // ms por caractere
const LINE_PAUSE = 500;  // pausa após cada linha
const RESTART_PAUSE = 2000; // pausa antes de reiniciar

export default function TerminalMockup() {
  const [visibleLines, setVisibleLines] = useState<{ line: Line; text: string }[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function sleep(ms: number) {
      return new Promise((r) => setTimeout(r, ms));
    }

    async function run() {
      while (!cancelled) {
        setVisibleLines([]);
        await sleep(400);

        for (let i = 0; i < LINES.length; i++) {
          if (cancelled) return;
          const line = LINES[i];

          if (line.type === "cmd") {
            // digita caractere por caractere
            for (let c = 0; c <= line.text.length; c++) {
              if (cancelled) return;
              const partial = line.text.slice(0, c);
              setVisibleLines((prev) => {
                const next = [...prev];
                next[i] = { line, text: partial };
                return next;
              });
              await sleep(CHAR_SPEED);
            }
          } else {
            // output aparece de uma vez
            setVisibleLines((prev) => {
              const next = [...prev];
              next[i] = { line, text: line.text };
              return next;
            });
          }

          await sleep(LINE_PAUSE);
        }

        await sleep(RESTART_PAUSE);
      }
    }

    run();
    return () => { cancelled = true; };
  }, []);

  // cursor piscando
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0D0D0D] shadow-2xl font-mono text-sm">
      {/* Barra do terminal */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#161616] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-zinc-500">~/pedro-web-studio</span>
      </div>

      {/* Conteúdo */}
      <div className="min-h-[320px] space-y-1.5 p-5">
        {visibleLines.map((item, i) => {
          if (!item) return null;
          const isLast = i === visibleLines.length - 1;
          const isCmd = item.line.type === "cmd";

          return (
            <div key={i} className="flex items-start gap-2 leading-6">
              {isCmd && (
                <span className="shrink-0 text-[#D4AF37]">$</span>
              )}
              {!isCmd && <span className="shrink-0 w-3" />}
              <span style={{ color: item.line.type === "output" ? item.line.color ?? "#E4E4E7" : "#E4E4E7" }}>
                {item.text}
                {isLast && isCmd && (
                  <span
                    className="ml-0.5 inline-block w-2 h-4 align-middle bg-[#D4AF37]"
                    style={{ opacity: cursorVisible ? 1 : 0 }}
                  />
                )}
              </span>
            </div>
          );
        })}

        {/* cursor na linha vazia quando não há nada ainda */}
        {visibleLines.length === 0 && (
          <div className="flex items-center gap-2 leading-6">
            <span className="text-[#D4AF37]">$</span>
            <span
              className="inline-block w-2 h-4 align-middle bg-[#D4AF37]"
              style={{ opacity: cursorVisible ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
