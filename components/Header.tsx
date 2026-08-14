"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          PEDRO<span className="text-[#D4AF37]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full border border-zinc-700 px-5 py-2.5 text-sm transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] md:block"
        >
          Vamos conversar
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-white origin-center"
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-50 flex flex-col gap-1 border-t border-zinc-800 bg-[#09090B] px-6 pb-6 pt-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-zinc-700 px-5 py-3 text-center text-sm transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Vamos conversar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}