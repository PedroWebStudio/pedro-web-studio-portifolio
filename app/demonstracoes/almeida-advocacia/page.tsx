"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-almeida",
});

export default function AlmeidaAdvocacia() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-[#F8F7F4] text-[#17202A]`}
      style={{ fontFamily: "var(--font-manrope-almeida)" }}
    >
      {/* BARRA DA DEMONSTRAÇÃO */}

      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-[#0B1F33]/10 bg-white/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-[#17202A]/60 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#0B1F33]">
            Pedro Web Studio
          </span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#0B1F33] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#B89B5E]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      {/* NAVBAR */}

      <header className="border-b border-[#0B1F33]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0B1F33]"
          >
            Almeida
            <span className="ml-1 text-[#B89B5E]">Advocacia</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {["#escritorio", "#atuacao", "#contato"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#B89B5E]">
                {["O escritório", "Áreas de atuação", "Contato"][i]}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden border border-[#0B1F33] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-[#0B1F33] hover:text-white lg:block"
          >
            Fale conosco
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#0B1F33] origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-[#0B1F33]" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#0B1F33] origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#0B1F33]/10 bg-white md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#escritorio", "#atuacao", "#contato"].map((href, i) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm text-[#17202A] transition hover:text-[#B89B5E]"
                  >
                    {["O escritório", "Áreas de atuação", "Contato"][i]}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 border border-[#0B1F33] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider transition hover:bg-[#0B1F33] hover:text-white"
                >
                  Fale conosco
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
              Advocacia estratégica
            </p>

            <h1 className="max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl leading-[0.95] text-[#0B1F33] sm:text-7xl lg:text-8xl">
              Estratégia,
              <br />
              experiência e
              <br />
              <span className="italic text-[#B89B5E]">confiança.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-base leading-8 text-[#17202A]/65"
              style={{
                fontFamily: "var(--font-manrope-almeida)",
              }}
            >
              Atuamos de forma estratégica na defesa dos interesses de nossos
              clientes, combinando experiência jurídica, proximidade e visão de
              longo prazo.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="bg-[#0B1F33] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#173653]"
              >
                Agende uma conversa
              </a>

              <a
                href="#atuacao"
                className="border border-[#0B1F33]/20 px-7 py-4 text-sm font-semibold text-[#0B1F33] transition hover:border-[#B89B5E]"
              >
                Conheça nossa atuação
              </a>
            </div>
          </motion.div>

          {/* COMPOSIÇÃO VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#B89B5E]/30" />

            <div className="relative overflow-hidden bg-[#0B1F33]">
              <div className="flex min-h-[380px] flex-col justify-between p-8 sm:min-h-[520px] sm:p-12">
                <div className="flex justify-end">
                  <span className="font-[family-name:var(--font-cormorant)] text-7xl text-[#B89B5E]/30">
                    A
                  </span>
                </div>

                <div>
                  <div className="mb-6 h-px w-16 bg-[#B89B5E]" />

                  <p className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-white sm:text-5xl">
                    Direito com
                    <br />
                    propósito.
                  </p>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                    Excelência técnica para decisões que exigem segurança.
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                    São Paulo · Brasil
                  </span>

                  <span className="text-4xl text-[#B89B5E]">01</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESCRITÓRIO */}

      <section id="escritorio" className="bg-white py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
              O escritório
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-tight text-[#0B1F33] sm:text-6xl">
              Uma advocacia
              <br />
              próxima e estratégica.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#17202A]/65">
            <p>
              A Almeida Advocacia nasceu com o propósito de oferecer uma
              experiência jurídica baseada em confiança, clareza e excelência.
            </p>

            <p>
              Nosso trabalho combina conhecimento técnico, atendimento próximo e
              estratégias personalizadas para cada caso.
            </p>

            <p>
              Mais do que solucionar questões jurídicas, buscamos construir
              relações duradouras com nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}

      <section id="atuacao" className="bg-[#F8F7F4] py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
              Áreas de atuação
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl text-[#0B1F33] sm:text-6xl">
              Experiência para
              <br />
              diferentes desafios.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#0B1F33]/10 bg-[#0B1F33]/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Direito Empresarial",
                text: "Estratégias jurídicas para empresas e negócios.",
              },
              {
                number: "02",
                title: "Direito Civil",
                text: "Atuação preventiva e contenciosa.",
              },
              {
                number: "03",
                title: "Contratos",
                text: "Segurança jurídica para relações comerciais.",
              },
              {
                number: "04",
                title: "Consultoria",
                text: "Orientação jurídica estratégica.",
              },
            ].map((area) => (
              <motion.div
                key={area.number}
                whileHover={{ y: -5 }}
                className="bg-[#F8F7F4] p-8"
              >
                <span className="text-xs text-[#B89B5E]">
                  {area.number}
                </span>

                <h3 className="mt-16 font-[family-name:var(--font-cormorant)] text-3xl text-[#0B1F33]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#17202A]/55">
                  {area.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section id="contato" className="bg-[#0B1F33] py-16 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
            Vamos conversar
          </p>

          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl">
            Seu caso merece
            <br />
            uma estratégia.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55">
            Entre em contato com nossa equipe e descubra como podemos ajudar.
          </p>

          <a
            href="mailto:contato@almeidaadvocacia.com.br"
            className="mt-10 inline-block bg-[#B89B5E] px-8 py-4 text-sm font-semibold text-[#0B1F33] transition hover:bg-white"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#071521] py-8 text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Almeida Advocacia</span>

          <span>Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
