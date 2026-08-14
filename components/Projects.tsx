"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Portfólio
            </span>
          </div>

          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Projetos selecionados.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Experiências digitais pensadas para diferentes tipos de negócios e necessidades.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
