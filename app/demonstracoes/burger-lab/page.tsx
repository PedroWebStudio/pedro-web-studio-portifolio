"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Barlow_Condensed, Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-burger",
});

const burgers = [
  {
    name: "Lab Smash",
    desc: "Blend 180g, cheddar, picles e molho da casa.",
    price: "R$ 32",
  },
  {
    name: "Double Smoke",
    desc: "Dois smash, bacon crisp e onion jam.",
    price: "R$ 42",
  },
  {
    name: "Green Fire",
    desc: "Burger no ponto, guacamole e jalapeño.",
    price: "R$ 38",
  },
  {
    name: "Classic Lab",
    desc: "O clássico elevado: alface, tomate e molho secreto.",
    price: "R$ 34",
  },
];

export default function BurgerLab() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${barlow.variable} ${inter.variable} min-h-screen bg-[#111111] text-white`}
      style={{ fontFamily: "var(--font-inter-burger)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A]/95 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/50 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#F5B942] px-4 py-2 text-xs font-bold text-black transition hover:bg-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#F5B942] text-sm font-black text-black">BL</span>
            <span className="text-2xl font-extrabold uppercase tracking-wide" style={{ fontFamily: "var(--font-barlow)" }}>Burger Lab</span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50 md:flex">
            {["#cardapio", "#sobre", "#pedido"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#F5B942]">
                {["Cardápio", "O lab", "Pedir"][i]}
              </a>
            ))}
          </nav>

          <a href="#pedido" className="hidden rounded-md bg-[#F5B942] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white md:block">
            Peça agora
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-white origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-white" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-white origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/10 bg-[#111111] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#cardapio", "#sobre", "#pedido"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase tracking-wide text-white/50 transition hover:text-[#F5B942]">
                    {["Cardápio", "O lab", "Pedir"][i]}
                  </a>
                ))}
                <a href="#pedido" onClick={() => setMenuOpen(false)} className="mt-3 rounded-md bg-[#F5B942] px-5 py-3 text-center text-xs font-black uppercase tracking-wider text-black transition hover:bg-white">
                  Peça agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#F5B942]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-full bg-[#F5B942]/5" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#F5B942]">
              Smash · Craft · Fire
            </p>

            <h1
              className="max-w-xl text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Burgers
              <br />
              que batem
              <br />
              <span className="text-[#F5B942]">diferente.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-white/55">
              Smash artesanal, blend selecionado e molhos autorais. O laboratório
              do burger na sua cidade.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#cardapio"
                className="rounded-md bg-[#F5B942] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-black transition hover:bg-white"
              >
                Ver cardápio
              </a>
              <a
                href="#pedido"
                className="rounded-md border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#F5B942] hover:text-[#F5B942]"
              >
                Delivery
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span
                  className="text-4xl font-extrabold uppercase text-[#F5B942]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  #01
                </span>
                <span className="rounded-full bg-[#F5B942]/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#F5B942]">
                  Best seller
                </span>
              </div>

              <div className="mt-10 aspect-square rounded-xl bg-[#0C0C0C] p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="mx-auto h-32 w-32 rounded-full border-[10px] border-[#F5B942]/30 bg-[#F5B942]/10" />
                  <div>
                    <p
                      className="text-3xl font-extrabold uppercase"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      Lab Smash
                    </p>
                    <p className="mt-2 text-sm text-white/45">
                      180g · cheddar · molho secreto
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className="text-3xl font-extrabold text-[#F5B942]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  R$ 32
                </span>
                <a
                  href="#pedido"
                  className="rounded-md bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#F5B942]"
                >
                  Adicionar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="cardapio" className="border-t border-white/10 bg-[#0C0C0C] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F5B942]">
                Cardápio
              </p>
              <h2
                className="mt-3 text-5xl font-extrabold uppercase sm:text-6xl"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Escolha seu
                <br />
                experimento.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/45">
              Combinações testadas no lab. Smash no ponto, pão brioche e
              acompanhamento crocante.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {burgers.map((burger, index) => (
              <motion.article
                key={burger.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#151515] p-6"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                    0{index + 1}
                  </p>
                  <h3
                    className="mt-3 text-3xl font-extrabold uppercase"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {burger.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {burger.desc}
                  </p>
                </div>
                <span
                  className="shrink-0 text-2xl font-extrabold text-[#F5B942]"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {burger.price}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F5B942]">
              O lab
            </p>
            <h2
              className="mt-3 text-5xl font-extrabold uppercase leading-none sm:text-6xl"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Feito na
              <br />
              chapa.
              <br />
              <span className="text-[#F5B942]">Sem enrolação.</span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-white/55">
            <p>
              No Burger Lab cada smash é prensado na hora, com blend próprio e
              tempero que a gente não revela — mas você sente.
            </p>
            <p>
              Ambiente moderno, fila que anda e sabor que marca. Ideal para
              quem quer qualidade sem perder a vibe de rua.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pedido"
        className="border-t border-white/10 bg-[#F5B942] py-24 text-black"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-black/50">
            Peça agora
          </p>
          <h2
            className="mt-4 text-5xl font-extrabold uppercase sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Fome não
            <br />
            espera.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-7 text-black/65">
            Delivery, retirada no balcão ou mesa. Escolhe o canal e manda ver.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:pedido@burgerlab.com.br"
              className="rounded-md bg-black px-8 py-4 text-sm font-black uppercase tracking-wide text-[#F5B942] transition hover:bg-[#111111]"
            >
              Pedir delivery
            </a>
            <a
              href="#cardapio"
              className="rounded-md border-2 border-black/20 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:border-black"
            >
              Ver menu
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] py-8 text-white/35">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-xs font-bold uppercase tracking-wider sm:flex-row lg:px-8">
          <span style={{ fontFamily: "var(--font-barlow)" }}>Burger Lab</span>
          <span>© 2026 · Smash every day.</span>
        </div>
      </footer>
    </main>
  );
}
