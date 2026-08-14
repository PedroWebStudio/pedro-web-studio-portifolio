"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const offers = [
  {
    title: "Hortifruti da semana",
    text: "Frutas e verduras frescas com preço de vizinho.",
    tag: "-15%",
  },
  {
    title: "Padaria quentinha",
    text: "Pães e bolos saindo do forno toda manhã.",
    tag: "Novo",
  },
  {
    title: "Mercearia completa",
    text: "Tudo o que falta na despensa, perto de casa.",
    tag: "Essencial",
  },
];

const aisles = [
  { title: "Hortifruti", text: "Frescos do dia" },
  { title: "Padaria", text: "Feito na hora" },
  { title: "Açougue", text: "Seleção da casa" },
  { title: "Mercearia", text: "Dia a dia" },
];

export default function MercadinhoBomDia() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${nunito.variable} min-h-screen bg-[#FFF8F0] text-[#1F2A24]`}
      style={{ fontFamily: "var(--font-nunito)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-[#1F2A24]/10 bg-white/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-[#1F2A24]/55 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#1F2A24]">Pedro Web Studio</span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#E85D4C] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1F3D2B]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="border-b-4 border-[#E85D4C] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E85D4C] text-lg font-black text-white">M</span>
            <div>
              <p className="text-lg font-extrabold leading-none tracking-tight">Mercadinho</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A4F]">Bom Dia</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#1F2A24]/70 md:flex">
            {["#ofertas", "#secoes", "#bairro", "#contato"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#E85D4C]">
                {["Ofertas", "Seções", "O bairro", "Contato"][i]}
              </a>
            ))}
          </nav>

          <a href="#contato" className="hidden rounded-2xl bg-[#2D6A4F] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#E85D4C] md:block">
            Como chegar
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#1F2A24] origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-[#1F2A24]" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#1F2A24] origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#1F2A24]/10 bg-white md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#ofertas", "#secoes", "#bairro", "#contato"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold text-[#1F2A24]/70 transition hover:text-[#E85D4C]">
                    {["Ofertas", "Seções", "O bairro", "Contato"][i]}
                  </a>
                ))}
                <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-3 rounded-2xl bg-[#2D6A4F] px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#E85D4C]">
                  Como chegar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-[#E85D4C]/15" />
          <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#2D6A4F]/15" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full bg-[#2D6A4F]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#2D6A4F]">
              Do bairro, para o bairro
            </p>

            <h1 className="max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-[#1F2A24] sm:text-6xl lg:text-7xl">
              Fresco,
              <br />
              perto e
              <br />
              <span className="text-[#E85D4C]">com carinho.</span>
            </h1>

            <p className="mt-7 max-w-md text-base font-semibold leading-8 text-[#1F2A24]/65">
              O mercadinho da esquina com hortifruti do dia, padaria quentinha e
              aquele atendimento que a gente só encontra no bairro.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#ofertas"
                className="rounded-2xl bg-[#E85D4C] px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#d44c3c]"
              >
                Ver ofertas
              </a>
              <a
                href="#contato"
                className="rounded-2xl border-2 border-[#1F2A24]/15 px-7 py-3.5 text-sm font-extrabold text-[#1F2A24] transition hover:border-[#2D6A4F] hover:text-[#2D6A4F]"
              >
                Horários
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border-4 border-[#1F2A24] bg-[#2D6A4F] p-6 text-white shadow-[12px_12px_0_#E85D4C]">
              <div className="rounded-[1.5rem] bg-[#1F3D2B] p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#F4C95F]">
                  Aberto agora
                </p>
                <p className="mt-4 text-4xl font-black leading-none sm:text-5xl">
                  7h às 21h
                </p>
                <p className="mt-4 text-sm font-semibold text-white/70">
                  Segunda a sábado · Domingo até 14h
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black text-[#F4C95F]">+80</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/55">
                      itens frescos
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black text-[#F4C95F]">12</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/55">
                      anos no bairro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ofertas" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#E85D4C]">
                Ofertas
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                O que está
                <br />
                valendo agora.
              </h2>
            </div>
            <p className="max-w-sm text-sm font-semibold leading-7 text-[#1F2A24]/55">
              Promoções da semana para encher a sacola sem complicação.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border-2 border-[#1F2A24]/10 bg-[#FFF8F0] p-7"
              >
                <span className="inline-flex rounded-full bg-[#E85D4C] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  {offer.tag}
                </span>
                <h3 className="mt-8 text-2xl font-extrabold">{offer.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#1F2A24]/55">
                  {offer.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="secoes" className="bg-[#2D6A4F] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#F4C95F]">
            Seções
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-black sm:text-5xl">
            Tudo o que você precisa, em um só lugar.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aisles.map((aisle) => (
              <div
                key={aisle.title}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-extrabold">{aisle.title}</h3>
                <p className="mt-2 text-sm font-semibold text-white/60">
                  {aisle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bairro" className="bg-[#FFF8F0] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#E85D4C]">
              O bairro
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Mais do que um mercado:
              <br />
              um ponto de encontro.
            </h2>
          </div>
          <div className="space-y-5 text-sm font-semibold leading-8 text-[#1F2A24]/65">
            <p>
              Há mais de uma década atendemos famílias da região com produtos
              frescos, preço justo e aquele “bom dia” de verdade.
            </p>
            <p>
              Aqui você encontra o essencial do dia a dia sem filas enormes —
              e ainda leva uma conversa boa no caixa.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#E85D4C] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/75">
            Visite a gente
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Rua das Palmeiras, 120
            <br />
            Vila Aurora · SP
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-semibold leading-7 text-white/80">
            Segunda a sábado · 7h às 21h · Domingo até 14h
          </p>
          <a
            href="mailto:ola@mercadinhobomdia.com.br"
            className="mt-9 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-[#E85D4C] transition hover:bg-[#FFF8F0]"
          >
            Falar com o mercadinho
          </a>
        </div>
      </section>

      <footer className="bg-[#1F3D2B] py-8 text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-xs font-bold sm:flex-row lg:px-8">
          <span>Mercadinho Bom Dia</span>
          <span>© 2026 · Feito com carinho no bairro.</span>
        </div>
      </footer>
    </main>
  );
}
