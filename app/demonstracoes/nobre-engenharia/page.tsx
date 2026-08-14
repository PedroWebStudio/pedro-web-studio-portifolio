"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const projects = [
  {
    number: "01",
    title: "Residencial Aurora",
    location: "São Paulo · SP",
    type: "Residencial",
  },
  {
    number: "02",
    title: "Centro Empresarial Nobre",
    location: "Campinas · SP",
    type: "Corporativo",
  },
  {
    number: "03",
    title: "Complexo Industrial 07",
    location: "Sorocaba · SP",
    type: "Industrial",
  },
];

export default function NobreEngenharia() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${spaceGrotesk.variable} min-h-screen bg-[#F4F5F2] text-[#101820]`}
      style={{ fontFamily: "var(--font-space)" }}
    >
      {/* DEMONSTRAÇÃO */}

      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#101820]/10 bg-white/90 p-1.5 shadow-lg backdrop-blur">
        {/* IDENTIFICAÇÃO */}

        <div className="px-4 py-2 text-xs text-[#17202A]/60">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#0B1F33]">Pedro Web Studio</span>
        </div>

        {/* ESCOLHER OUTRO PROJETO */}

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#101820] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#F05A28]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      {/* HEADER */}

      <header className="border-b border-[#101820]/10 bg-[#F4F5F2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#101820] text-sm font-bold text-white">
              N
            </span>
            <span className="text-sm font-bold tracking-tight">
              NOBRE<span className="font-normal"> ENGENHARIA</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider md:flex">
            {["#empresa", "#projetos", "#processo"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#F05A28]">
                {["Empresa", "Projetos", "Processo"][i]}
              </a>
            ))}
          </nav>

          <a href="#contato" className="hidden bg-[#F05A28] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#101820] md:block">
            Fale conosco
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#101820] origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-[#101820]" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-[#101820] origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-[#101820]/10 bg-[#F4F5F2] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#empresa", "#projetos", "#processo"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium text-[#101820] transition hover:text-[#F05A28]">
                    {["Empresa", "Projetos", "Processo"][i]}
                  </a>
                ))}
                <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-3 bg-[#F05A28] px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#101820]">
                  Fale conosco
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}

      <section className="overflow-hidden bg-[#101820] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 bg-[#F05A28]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                Engenharia & construção
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Projetamos
              <br />
              espaços que
              <br />
              <span className="text-[#F05A28]">transformam.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              Engenharia, arquitetura e execução para projetos que combinam
              precisão técnica, eficiência e visão de futuro.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="bg-[#F05A28] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#101820]"
              >
                Ver projetos →
              </a>

              <a
                href="#empresa"
                className="border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:border-[#F05A28]"
              >
                Conheça a Nobre
              </a>
            </div>
          </motion.div>

          {/* COMPOSIÇÃO */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#F05A28]/20" />

            <div className="relative border border-white/10 bg-[#16242E] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Projeto em destaque
                </span>

                <span className="text-xs text-[#F05A28]">2026</span>
              </div>

              <div className="relative mt-6 h-[420px] overflow-hidden bg-[#24343E]">
                <div className="absolute inset-x-10 bottom-0 h-[78%] border border-white/10 bg-[#1B2B35]" />

                <div className="absolute bottom-0 left-1/2 h-[90%] w-px -translate-x-1/2 bg-[#F05A28]/50" />

                <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-[#F05A28]" />

                <div className="absolute bottom-8 right-8">
                  <span className="text-7xl font-bold tracking-[-0.08em] text-white/10">
                    01
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between pt-6">
                <div>
                  <p className="text-lg font-bold">Residencial Aurora</p>

                  <p className="mt-1 text-xs text-white/40">São Paulo · SP</p>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#F05A28]">
                  Ver projeto →
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NÚMEROS */}

      <section className="border-b border-[#101820]/10 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y border-x border-[#101820]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ["15+", "anos de experiência"],
            ["120+", "projetos entregues"],
            ["35", "cidades atendidas"],
            ["98%", "clientes satisfeitos"],
          ].map(([number, label]) => (
            <div key={number} className="px-8 py-10">
              <p className="text-5xl font-bold tracking-[-0.05em] text-[#101820]">
                {number}
              </p>

              <p className="mt-3 text-xs uppercase tracking-wider text-[#101820]/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EMPRESA */}

      <section id="empresa" className="py-16 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F05A28]">
              A empresa
            </p>

            <h2 className="mt-6 max-w-lg text-5xl font-bold leading-[1] tracking-[-0.05em] sm:text-6xl">
              Engenharia
              <br />
              com visão
              <br />
              de futuro.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <span className="text-4xl font-bold text-[#F05A28]">01</span>

              <h3 className="mt-6 text-xl font-bold">Precisão</h3>

              <p className="mt-3 text-sm leading-7 text-[#101820]/55">
                Cada etapa é planejada com rigor técnico para garantir
                qualidade, segurança e eficiência.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-[#F05A28]">02</span>

              <h3 className="mt-6 text-xl font-bold">Tecnologia</h3>

              <p className="mt-3 text-sm leading-7 text-[#101820]/55">
                Utilizamos tecnologia e processos modernos para tornar cada
                projeto mais eficiente.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-[#F05A28]">03</span>

              <h3 className="mt-6 text-xl font-bold">Transparência</h3>

              <p className="mt-3 text-sm leading-7 text-[#101820]/55">
                Comunicação clara durante todas as etapas da execução.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-[#F05A28]">04</span>

              <h3 className="mt-6 text-xl font-bold">Resultado</h3>

              <p className="mt-3 text-sm leading-7 text-[#101820]/55">
                Projetos pensados para entregar valor no longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}

      <section id="projetos" className="bg-[#101820] py-16 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F05A28]">
                Projetos selecionados
              </p>

              <h2 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
                O que construímos.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45">
              Projetos residenciais, corporativos e industriais desenvolvidos
              com foco em desempenho e qualidade.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.number}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="group border border-white/10 bg-[#16242E] p-5"
              >
                <div className="relative h-72 overflow-hidden bg-[#24343E]">
                  <div className="absolute inset-x-8 bottom-0 h-[75%] border border-white/10 bg-[#1B2B35] transition-transform duration-500 group-hover:scale-105" />

                  <span className="absolute left-5 top-5 text-xs text-[#F05A28]">
                    {project.number}
                  </span>
                </div>

                <div className="pt-6">
                  <p className="text-xs uppercase tracking-wider text-[#F05A28]">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                  <p className="mt-2 text-xs text-white/40">
                    {project.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}

      <section id="processo" className="py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F05A28]">
            Nosso processo
          </p>

          <h2 className="mt-6 max-w-2xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
            Do conceito à entrega.
          </h2>

          <div className="mt-20 grid gap-0 border-t border-[#101820]/10 md:grid-cols-4">
            {[
              [
                "01",
                "Briefing",
                "Entendemos o objetivo e as necessidades do projeto.",
              ],
              ["02", "Projeto", "Transformamos ideias em soluções técnicas."],
              ["03", "Execução", "Coordenamos cada etapa com precisão."],
              ["04", "Entrega", "Garantimos qualidade até o último detalhe."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-b border-[#101820]/10 py-8 md:border-r md:px-8"
              >
                <span className="text-sm font-bold text-[#F05A28]">
                  {number}
                </span>

                <h3 className="mt-12 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#101820]/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section id="contato" className="bg-[#F05A28] py-16 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Vamos construir juntos
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Seu próximo projeto
            <br />
            começa aqui.
          </h2>

          <a
            href="mailto:contato@nobreengenharia.com.br"
            className="mt-10 inline-flex bg-[#101820] px-8 py-4 text-sm font-bold transition hover:bg-white hover:text-[#101820]"
          >
            Falar com a Nobre →
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#0A1116] py-8 text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Nobre Engenharia</span>

          <span>Engenharia · Arquitetura · Construção</span>
        </div>
      </footer>
    </main>
  );
}
