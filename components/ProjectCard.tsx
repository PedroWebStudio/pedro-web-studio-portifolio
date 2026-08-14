"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const DESKTOP_W = 1280;
const DESKTOP_H = 720;
const MOBILE_W = 390;
const MOBILE_H = 844;

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const demoUrl = `/demonstracoes/${project.id}`;
  const desktopRef = useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = useState(0.47);

  useEffect(() => {
    const el = desktopRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w > 0) setDesktopScale(w / DESKTOP_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projetos/${project.id}`} className="block">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ backgroundColor: project.previewBg }}
        >
          {/* ── Desktop mockup — lg+ ── */}
          <div className="hidden lg:block">
            <div className="relative w-full" style={{ aspectRatio: `${DESKTOP_W}/${DESKTOP_H}` }}>
              <div className="absolute inset-0 flex flex-col p-4">
                {/* Browser chrome */}
                <div className="flex shrink-0 items-center gap-1.5 rounded-t-lg border border-black/10 bg-black/15 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <div className="ml-2 flex h-4 flex-1 items-center rounded-md bg-black/10 px-2">
                    <span className="truncate text-[9px] text-black/30">
                      pedrowebstudio.com/demonstracoes/{project.id}
                    </span>
                  </div>
                </div>
                {/* iframe area */}
                <div
                  ref={desktopRef}
                  className="relative flex-1 overflow-hidden rounded-b-lg border border-t-0 border-black/10"
                >
                  <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{ width: DESKTOP_W, transform: `scale(${desktopScale})` }}
                  >
                    <iframe
                      src={demoUrl}
                      width={DESKTOP_W}
                      height={DESKTOP_H}
                      scrolling="no"
                      tabIndex={-1}
                      style={{ pointerEvents: "none", display: "block", border: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile mockup — below lg ── */}
          <div className="flex justify-center py-8 lg:hidden">
            <div className="relative" style={{ width: 168, height: 340 }}>
              {/* Phone frame */}
              <div className="absolute inset-0 overflow-hidden rounded-[28px] border-[6px] border-black/25 shadow-2xl">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-black/30" />
                {/* Scaled iframe: inner width ≈ 156px → scale = 156/390 = 0.4 */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{ width: MOBILE_W, transform: `scale(${156 / MOBILE_W})` }}
                  >
                    <iframe
                      src={demoUrl}
                      width={MOBILE_W}
                      height={MOBILE_H}
                      scrolling="no"
                      tabIndex={-1}
                      style={{ pointerEvents: "none", display: "block", border: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">
              Ver projeto →
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wider" style={{ color: project.accent }}>
          {project.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-zinc-500">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
