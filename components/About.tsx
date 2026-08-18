"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@/components/icons";

const stats = [
  { value: "8+", label: "Projetos entregues" },
  { value: "100%", label: "Foco no cliente" },
  { value: "3+", label: "Anos de experiência" },
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-zinc-900 py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

          {/* Lado esquerdo — foto + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Foto */}
            <div className="relative mx-auto max-w-sm lg:mx-0">
              {/* glow de fundo */}
              <div className="absolute -inset-4 rounded-3xl bg-[#D4AF37]/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-[4/5]">
                {/* Placeholder — troque por <Image> quando tiver a foto */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="h-24 w-24 text-zinc-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>

                {/* Badge dourado */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#D4AF37]/20 bg-black/60 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-white">Pedro</p>
                  <p className="text-xs text-zinc-400">Desenvolvedor & Designer</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-[#D4AF37]">{s.value}</p>
                  <p className="mt-1 text-xs leading-4 text-zinc-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado direito — texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                Sobre mim
              </span>
            </div>

            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
              Olá, eu sou o Pedro.
            </h2>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                Sou desenvolvedor web freelancer e fundador do{" "}
                <span className="font-medium text-white">Pedro Web Studio</span>.
                Trabalho criando sites institucionais modernos para empresas que
                querem transmitir credibilidade e profissionalismo na internet.
              </p>
              <p>
                Cada projeto que entrego é desenvolvido do zero — sem templates
                genéricos. Cuido de tudo: design, código, responsividade e
                publicação. O resultado é um site que realmente representa o
                negócio do cliente.
              </p>
              <p>
                Meu foco é simples: entregar um produto de qualidade, dentro do
                prazo, com comunicação clara do início ao fim.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "UI/UX Design"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-black"
            >
              Vamos conversar
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
