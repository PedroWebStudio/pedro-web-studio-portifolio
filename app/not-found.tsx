"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.p
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-6xl"
        >
          🤔
        </motion.p>

        <h1 className="text-[120px] font-black leading-none text-[#D4AF37] tracking-tighter">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Essa página foi embora sem avisar
          </h2>
          <p className="text-zinc-400 max-w-sm">
            Nem o melhor site do mundo tem essa URL. Talvez ela nunca tenha
            existido, ou sumiu igual cliente que some depois do orçamento.
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 rounded-full border border-zinc-700 px-6 py-3 text-sm transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
        >
          Voltar para o início
        </Link>
      </motion.div>
    </main>
  );
}
