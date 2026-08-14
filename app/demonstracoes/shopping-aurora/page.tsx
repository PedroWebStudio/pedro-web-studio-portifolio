"use client";

import { motion } from "framer-motion";
import { Archivo, Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const stores = [
  { name: "Nord / Fashion", floor: "Piso 1", tag: "Moda" },
  { name: "Atlas Tech", floor: "Piso 2", tag: "Eletrônicos" },
  { name: "Casa Lumière", floor: "Piso 1", tag: "Casa" },
  { name: "Pulse Sport", floor: "Piso 2", tag: "Esporte" },
];

const events = [
  {
    day: "15",
    month: "MAR",
    title: "Noite de lançamentos",
    text: "Marcas convidadas, DJs e experiências no food hall.",
  },
  {
    day: "22",
    month: "MAR",
    title: "Cinema ao ar livre",
    text: "Sessão especial na praça central do Aurora.",
  },
  {
    day: "29",
    month: "MAR",
    title: "Feira gastronômica",
    text: "Chefs locais e novos sabores no piso gourmet.",
  },
];

export default function ShoppingAurora() {
  return (
    <main
      className={`${syne.variable} ${archivo.variable} min-h-screen bg-[#0A0A0F] text-white`}
      style={{ fontFamily: "var(--font-archivo)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#12121A]/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/50 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#2EE6A6] px-4 py-2 text-xs font-bold text-[#0A0A0F] transition hover:bg-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#2EE6A6]" />
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              AURORA
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40 sm:block">
              Shopping
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-wider text-white/55 md:flex">
            <a href="#lojas" className="transition hover:text-[#2EE6A6]">
              Lojas
            </a>
            <a href="#experiencia" className="transition hover:text-[#2EE6A6]">
              Experiência
            </a>
            <a href="#agenda" className="transition hover:text-[#2EE6A6]">
              Agenda
            </a>
            <a href="#contato" className="transition hover:text-[#2EE6A6]">
              Visite
            </a>
          </nav>

          <a
            href="#agenda"
            className="border border-[#2EE6A6]/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#2EE6A6] transition hover:bg-[#2EE6A6] hover:text-[#0A0A0F]"
          >
            Ver eventos
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-20%] top-[-30%] h-[70%] w-[70%] rounded-full bg-[#2EE6A6]/10 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] h-[40%] w-[40%] bg-[#2EE6A6]/[0.07] blur-3xl" />
          <div className="absolute inset-y-0 right-0 w-[42%] from-[#12121A] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#2EE6A6]">
              O shopping da cidade
            </p>

            <h1
              className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Compre.
              <br />
              Coma.
              <br />
              <span className="text-[#2EE6A6]">Viva.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/55">
              Mais de 180 lojas, food hall, cinema e uma agenda cultural que
              transforma o Aurora no ponto de encontro da cidade.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#lojas"
                className="bg-[#2EE6A6] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0A0A0F] transition hover:bg-white"
              >
                Explorar lojas
              </a>
              <a
                href="#experiencia"
                className="border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[#2EE6A6] hover:text-[#2EE6A6]"
              >
                A experiência
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="border border-white/10 bg-[#12121A] p-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                  Hoje no Aurora
                </span>
                <span className="text-xs font-bold text-[#2EE6A6]">AO VIVO</span>
              </div>

              <div className="mt-8 space-y-6">
                {[
                  { label: "Food Hall", value: "42 operações" },
                  { label: "Cinema", value: "8 salas" },
                  { label: "Estacionamento", value: "2.400 vagas" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-end justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        {item.label}
                      </p>
                      <p
                        className="mt-2 text-3xl font-bold"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                    <span className="mb-2 h-px flex-1 bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between bg-[#0A0A0F] px-5 py-4">
                <span className="text-xs uppercase tracking-wider text-white/45">
                  Aberto até
                </span>
                <span
                  className="text-2xl font-bold text-[#2EE6A6]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  22h
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="lojas" className="border-t border-white/10 bg-[#0F0F16] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
              Lojas
            </p>
            <h2
              className="mt-4 text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Uma curadoria
              <br />
              para cada estilo.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stores.map((store, index) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="border border-white/10 bg-[#0A0A0F] p-6 transition hover:border-[#2EE6A6]/40"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2EE6A6]">
                  {store.tag}
                </span>
                <h3
                  className="mt-10 text-2xl font-bold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {store.name}
                </h3>
                <p className="mt-3 text-sm text-white/45">{store.floor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
              Experiência
            </p>
            <h2
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Não é só comprar.
              <br />
              É passar o dia.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Food Hall",
                text: "Sabores do mundo em um só piso — ideal para encontros.",
              },
              {
                title: "Cinema",
                text: "Lançamentos, pré-estreias e sessões especiais.",
              },
              {
                title: "Serviços",
                text: "Beleza, bancos, retirada rápida e estacionamento fácil.",
              },
              {
                title: "Eventos",
                text: "Agenda cultural para a cidade viver o Aurora.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-[#12121A] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
                Agenda
              </p>
              <h2
                className="mt-4 text-4xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                O que rola
                <br />
                este mês.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/45">
              Eventos, lançamentos e experiências para você colocar na agenda.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="grid items-center gap-6 border border-white/10 bg-[#0A0A0F] p-6 transition hover:border-[#2EE6A6]/35 sm:grid-cols-[120px_1fr]"
              >
                <div className="text-center sm:text-left">
                  <p
                    className="text-4xl font-bold text-[#2EE6A6]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {event.day}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                    {event.month}
                  </p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    {event.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#2EE6A6] py-28 text-[#0A0A0F]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0A0A0F]/55">
            Visite o Aurora
          </p>
          <h2
            className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            A cidade encontra
            <br />
            aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm font-semibold leading-7 text-[#0A0A0F]/65">
            Av. das Estrelas, 900 · São Paulo · Aberto todos os dias das 10h às
            22h
          </p>
          <a
            href="mailto:visite@shoppingaurora.com.br"
            className="mt-10 inline-flex bg-[#0A0A0F] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0A0A0F]"
          >
            Como chegar →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-white/35">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span style={{ fontFamily: "var(--font-syne)" }}>SHOPPING AURORA</span>
          <span>© 2026 · Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
