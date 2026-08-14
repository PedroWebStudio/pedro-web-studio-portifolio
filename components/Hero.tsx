"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl items-center px-6 py-12 sm:py-20 lg:min-h-[calc(100vh-88px)] lg:px-8">
      <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Design & Development
            </span>
          </div>

          <h1 className="max-w-3xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Seu negócio.
            <br />
            Uma presença digital
            <br />
            <span className="text-zinc-500">à altura.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Sites institucionais modernos, rápidos e personalizados
            para empresas que querem transmitir profissionalismo e credibilidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-black"
            >
              Ver projetos
              <span className="ml-2">→</span>
            </motion.a>

            <motion.a
              href="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-7 text-sm font-medium text-white"
            >
              Fale comigo
            </motion.a>
          </div>
        </motion.div>

        {/* Mockup — oculto em mobile */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-[#D4AF37]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] shadow-2xl">
              {/* Barra do navegador */}
              <div className="flex h-12 items-center gap-2 border-b border-zinc-800 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                <div className="ml-4 h-6 flex-1 rounded-md bg-zinc-900" />
              </div>

              {/* Conteúdo do mockup */}
              <div className="p-6 sm:p-8">
                <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider">
                      ALMEIDA<span className="text-[#D4AF37]">.</span>
                    </span>

                    <div className="hidden gap-4 sm:flex">
                      <span className="h-2 w-10 rounded bg-zinc-800" />
                      <span className="h-2 w-10 rounded bg-zinc-800" />
                      <span className="h-2 w-10 rounded bg-zinc-800" />
                    </div>
                  </div>

                  <div className="mt-16 max-w-sm">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Advocacia
                    </span>

                    <div className="mt-4 h-4 w-4/5 rounded bg-zinc-700" />
                    <div className="mt-2 h-4 w-3/5 rounded bg-zinc-800" />

                    <div className="mt-6 h-3 w-full rounded bg-zinc-900" />
                    <div className="mt-2 h-3 w-4/5 rounded bg-zinc-900" />

                    <div className="mt-8 h-9 w-28 rounded-full bg-[#D4AF37]" />
                  </div>

                  <div className="mt-16 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-zinc-900" />
                    <div className="h-20 rounded-lg bg-zinc-900" />
                    <div className="h-20 rounded-lg bg-zinc-900" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}