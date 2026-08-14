"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Fraunces, Outfit } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const treatments = [
  {
    title: "Estética facial",
    text: "Cuidados personalizados para realçar sua naturalidade com leveza.",
  },
  {
    title: "Bem-estar",
    text: "Protocolos pensados para equilíbrio, relaxamento e autocuidado.",
  },
  {
    title: "Dermatologia",
    text: "Acompanhamento clínico com atenção ao detalhe e à sua pele.",
  },
  {
    title: "Harmonização",
    text: "Resultados sutis, elegantes e alinhados ao seu perfil.",
  },
];

export default function BellaVita() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${fraunces.variable} ${outfit.variable} min-h-screen bg-[#FAF7F2] text-[#3D3632]`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-[#3D3632]/10 bg-white/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-[#3D3632]/55 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#3D3632]">Pedro Web Studio</span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#6B8F71] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#3D3632]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B8F71]/15 text-sm font-semibold text-[#6B8F71]">B</span>
            <span className="text-xl tracking-tight text-[#3D3632]" style={{ fontFamily: "var(--font-fraunces)" }}>Bella Vita</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#3D3632]/70 md:flex">
            {["#clinica", "#cuidados", "#contato"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#6B8F71]">
                {["A clínica", "Cuidados", "Contato"][i]}
              </a>
            ))}
          </nav>

          <a href="#contato" className="hidden rounded-full bg-[#6B8F71] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#5A7A60] md:block">
            Agendar
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#3D3632] origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-[#3D3632]" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#3D3632] origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#3D3632]/10 bg-[#FAF7F2] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#clinica", "#cuidados", "#contato"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm text-[#3D3632]/70 transition hover:text-[#6B8F71]">
                    {["A clínica", "Cuidados", "Contato"][i]}
                  </a>
                ))}
                <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-[#6B8F71] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#5A7A60]">
                  Agendar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#6B8F71]/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#D4A5A5]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#6B8F71]">
              Clínica de bem-estar
            </p>

            <h1
              className="max-w-xl text-5xl leading-[1.05] text-[#3D3632] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Cuidado que
              <br />
              respeita o seu
              <br />
              <span className="italic text-[#6B8F71]">ritmo.</span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-8 text-[#3D3632]/65">
              Um espaço acolhedor para estética, dermatologia e bem-estar —
              com atendimento próximo e resultados naturais.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-full bg-[#3D3632] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#6B8F71]"
              >
                Agendar avaliação
              </a>
              <a
                href="#cuidados"
                className="rounded-full border border-[#3D3632]/15 px-7 py-3.5 text-sm font-semibold text-[#3D3632] transition hover:border-[#6B8F71] hover:text-[#6B8F71]"
              >
                Ver cuidados
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full border border-[#D4A5A5]/50" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#EDE6DC] p-8 sm:p-10">
              <div className="flex min-h-[420px] flex-col justify-between rounded-[2rem] bg-[#FAF7F2] p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[#6B8F71]/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#6B8F71]">
                    Bem-estar
                  </span>
                  <span
                    className="text-5xl text-[#D4A5A5]/70"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    BV
                  </span>
                </div>

                <div>
                  <p
                    className="text-3xl leading-snug text-[#3D3632] sm:text-4xl"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Pele, equilíbrio
                    <br />e presença.
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-[#3D3632]/55">
                    Protocolos suaves, ambiente sereno e atenção genuína a cada
                    detalhe.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#3D3632]/40">
                  <span>São Paulo</span>
                  <span className="text-[#6B8F71]">desde 2018</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="clinica" className="bg-white py-16 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B8F71]">
              A clínica
            </p>
            <h2
              className="mt-5 text-4xl leading-tight text-[#3D3632] sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Um ambiente feito
              <br />
              para acolher.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#3D3632]/65">
            <p>
              A Bella Vita nasceu para oferecer cuidados estéticos e de
              bem-estar com leveza, segurança e sofisticação.
            </p>
            <p>
              Aqui, cada protocolo é pensado a partir da sua rotina, do seu
              objetivo e do seu conforto — sem exageros, com naturalidade.
            </p>
            <p>
              Mais do que procedimentos, criamos uma experiência de cuidado
              contínuo.
            </p>
          </div>
        </div>
      </section>

      <section id="cuidados" className="bg-[#FAF7F2] py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B8F71]">
              Cuidados
            </p>
            <h2
              className="mt-5 text-4xl text-[#3D3632] sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Escolha o que faz
              <br />
              sentido para você.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {treatments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-[#3D3632]/08 bg-white p-8 shadow-sm"
              >
                <span className="text-xs font-semibold text-[#D4A5A5]">
                  0{index + 1}
                </span>
                <h3
                  className="mt-10 text-2xl text-[#3D3632]"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#3D3632]/55">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EDE6DC] py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B8F71]">
              Nossa abordagem
            </p>
            <h2
              className="mt-4 max-w-lg text-3xl leading-snug text-[#3D3632] sm:text-4xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Resultados naturais, escuta verdadeira e cuidado contínuo.
            </h2>
          </div>

          <div className="grid w-full max-w-md grid-cols-3 gap-4 text-center">
            {[
              { value: "8+", label: "anos" },
              { value: "2k", label: "pacientes" },
              { value: "12", label: "protocolos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white/70 px-3 py-5"
              >
                <p
                  className="text-2xl text-[#6B8F71]"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#3D3632]/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#6B8F71] py-16 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Agende sua visita
          </p>

          <h2
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Seu momento de
            <br />
            cuidado começa aqui.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/70">
            Fale com a equipe Bella Vita e encontre o protocolo ideal para a
            sua rotina.
          </p>

          <a
            href="mailto:contato@bellavita.com.br"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#3D3632] transition hover:bg-[#FAF7F2]"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="bg-[#3D4F42] py-8 text-white/45">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span style={{ fontFamily: "var(--font-fraunces)" }}>
            Bella Vita Clínica
          </span>
          <span>© {new Date().getFullYear()} · Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
