"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contato" className="border-t border-zinc-900 bg-[#0C0C0E]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Contato
            </span>
            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tem um projeto em mente?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Vamos transformar sua ideia em uma experiência digital.
          </p>

          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contato"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-black"
            >
              Vamos conversar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <p className="mt-8 text-sm text-zinc-600">
            contatopedrowebstudio@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
