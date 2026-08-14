"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="border-t border-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                Sobre
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Design e código
              <br />
              com o mesmo critério.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-base leading-8 text-zinc-400"
          >
            <p>
              Sou o Pedro — e o Pedro Web Studio nasceu para criar sites
              institucionais que realmente representam o negócio por trás deles.
            </p>

            <p>
              Cada projeto recebe uma identidade visual própria: tipografia,
              paleta, ritmo e tom pensados para o setor. O resultado é uma
              presença digital moderna, rápida e pronta para gerar confiança.
            </p>

            <p>
              Se a sua empresa precisa de um site à altura do que entrega no
              dia a dia, vamos conversar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
