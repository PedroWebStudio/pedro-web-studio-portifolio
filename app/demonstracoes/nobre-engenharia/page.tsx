"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useRef, useState } from "react";
import { ArrowLeft } from "@/components/icons";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-nobre",
});

type Project = {
  id: string;
  title: string;
  location: string;
  type: "Residencial" | "Corporativo" | "Industrial";
  area: string;
  year: string;
  status: "Entregue" | "Em obra" | "Projeto";
  image: string;
  summary: string;
};

const projects: Project[] = [
  {
    id: "aurora",
    title: "Residencial Aurora",
    location: "São Paulo · SP",
    type: "Residencial",
    area: "18.400 m²",
    year: "2024",
    status: "Entregue",
    image: "/demonstracoes/nobre-engenharia/obra-1.jpg",
    summary: "Torres residenciais com estrutura mista e fachada ventilada.",
  },
  {
    id: "centro",
    title: "Centro Empresarial Nobre",
    location: "Campinas · SP",
    type: "Corporativo",
    area: "32.000 m²",
    year: "2025",
    status: "Em obra",
    image: "/demonstracoes/nobre-engenharia/obra-2.jpg",
    summary: "Complexo corporativo com 3 torres e praça central.",
  },
  {
    id: "industrial",
    title: "Complexo Industrial 07",
    location: "Sorocaba · SP",
    type: "Industrial",
    area: "54.200 m²",
    year: "2023",
    status: "Entregue",
    image: "/demonstracoes/nobre-engenharia/obra-3.jpg",
    summary: "Galpões logísticos de alto padrão com pátios e docas.",
  },
  {
    id: "harbor",
    title: "Harbor Tech Park",
    location: "Santos · SP",
    type: "Corporativo",
    area: "21.100 m²",
    year: "2026",
    status: "Projeto",
    image: "/demonstracoes/nobre-engenharia/obra-2.jpg",
    summary: "Campus tecnológico à beira-mar com laboratórios e escritórios.",
  },
  {
    id: "vista",
    title: "Vista Verde Residence",
    location: "Jundiaí · SP",
    type: "Residencial",
    area: "12.800 m²",
    year: "2025",
    status: "Em obra",
    image: "/demonstracoes/nobre-engenharia/obra-1.jpg",
    summary: "Condomínio horizontal com infraestrutura completa.",
  },
];

const services = [
  {
    title: "Projeto estrutural",
    text: "Dimensionamento, compatibilização BIM e documentação executiva.",
  },
  {
    title: "Gerenciamento de obra",
    text: "Cronograma, custo, qualidade e segurança em um só fluxo.",
  },
  {
    title: "Infraestrutura",
    text: "Terraplenagem, fundações, redes e acessos com controle técnico.",
  },
  {
    title: "Retrofit",
    text: "Modernização estrutural e adequação normativa de edificações.",
  },
];

const testimonials = [
  {
    name: "Carla Menezes",
    role: "Diretora de Incorporação",
    text: "Cronograma cumprido e comunicação clara em todas as frentes da obra.",
  },
  {
    name: "Rafael Souza",
    role: "Gerente de Facilities",
    text: "A Nobre entrega engenharia com método. Pouca surpresa, muita previsibilidade.",
  },
  {
    name: "Helena Prado",
    role: "CEO · Parque Logístico",
    text: "Do briefing à entrega, o time manteve o padrão técnico que pedimos.",
  },
];

const processSteps = [
  { n: "01", title: "Briefing técnico", text: "Escopo, restrições, metas de prazo e custo." },
  { n: "02", title: "Engenharia", text: "Projeto, compatibilização e documentação." },
  { n: "03", title: "Execução", text: "Obra com qualidade e cronograma vivo." },
  { n: "04", title: "Entrega", text: "Comissionamento, as-built e suporte." },
];

export default function NobreEngenharia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [activeStep, setActiveStep] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const t = typeFilter === "Todos" || p.type === typeFilter;
        const s = statusFilter === "Todos" || p.status === statusFilter;
        return t && s;
      }),
    [typeFilter, statusFilter],
  );

  const current =
    projects.find((p) => p.id === activeProject) ?? filtered[0] ?? projects[0];

  function submitQuote(e: FormEvent) {
    e.preventDefault();
    setQuoteSent(true);
  }

  return (
    <main
      className={`${space.variable} min-h-screen bg-[#101820] text-[#E8ECEF]`}
      style={{ fontFamily: "var(--font-nobre)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#18232E]/95 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/50 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#F05A28] px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-[#101820]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeft className="h-3.5 w-3.5" />
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#F05A28] text-sm font-bold text-white">
              N
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              NOBRE <span className="font-normal text-white/55">ENGENHARIA</span>
            </span>
          </a>
          <nav className="hidden gap-7 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 md:flex">
            {[
              ["#empresa", "Empresa"],
              ["#obras", "Obras"],
              ["#servicos", "Serviços"],
              ["#processo", "Processo"],
              ["#depoimentos", "Clientes"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#F05A28]">
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setQuoteOpen(true);
              setQuoteSent(false);
            }}
            className="hidden bg-[#F05A28] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white md:inline-flex"
          >
            Solicitar briefing
          </button>
          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="mb-1.5 block h-px w-6 bg-white" />
            <span className="mb-1.5 block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#101820]/95 md:hidden"
            >
              <div className="flex flex-col px-6 py-3">
                {[
                  ["#empresa", "Empresa"],
                  ["#obras", "Obras"],
                  ["#servicos", "Serviços"],
                  ["#processo", "Processo"],
                  ["#orcamento", "Orçamento"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO com imagem + parallax */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <Image
            src="/demonstracoes/nobre-engenharia/hero.jpg"
            alt="Obra Nobre Engenharia"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/85 to-[#101820]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-[#101820]/40" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#F05A28]"
          >
            Engenharia de precisão
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 max-w-3xl text-5xl font-bold leading-[0.98] sm:text-7xl"
          >
            Obra complexa.
            <br />
            Controle total.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-sm leading-7 text-white/70"
          >
            Projetos residenciais, corporativos e industriais com engenharia
            clara, cronograma vivo e entrega sem surpresa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#obras"
              className="bg-[#F05A28] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Ver obras
            </a>
            <button
              type="button"
              onClick={() => {
                setQuoteOpen(true);
                setQuoteSent(false);
              }}
              className="border border-white/30 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white hover:border-[#F05A28]"
            >
              Solicitar briefing
            </button>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              ["240+", "obras"],
              ["18", "anos"],
              ["96%", "no prazo"],
              ["3", "estados"],
            ].map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="bg-[#101820]/90 px-5 py-5 backdrop-blur"
              >
                <p className="text-3xl font-bold text-[#F05A28]">{n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {l}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/demonstracoes/nobre-engenharia/equipe.jpg"
              alt="Equipe em obra"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101820] to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#F05A28]">
                Campo + escritório
              </p>
            </div>
          </motion.div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
              A empresa
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
              Engenharia que sustenta decisões.
            </h2>
            <p className="mt-5 text-sm leading-8 text-white/60">
              Unimos projeto, obra e gestão em um único time. Cada etapa é
              documentada, medida e comunicada — para que o cliente acompanhe o
              que importa sem ruído.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              {[
                "BIM e compatibilização multidisciplinar",
                "Controle de custo e prazo em tempo real",
                "Equipe própria de campo e supervisão",
                "Pós-obra com as-built e suporte técnico",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F05A28]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras" className="scroll-mt-24 border-t border-white/10 bg-[#0C1319] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
                Portfólio
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Obras em evidência</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Todos", "Residencial", "Corporativo", "Industrial"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                    typeFilter === t
                      ? "bg-[#F05A28] text-white"
                      : "border border-white/15 text-white/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Todos", "Entregue", "Em obra", "Projeto"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={`text-[11px] uppercase tracking-wider ${
                  statusFilter === s ? "text-[#F05A28]" : "text-white/35"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="divide-y divide-white/10 border border-white/10">
              {filtered.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProject(p.id)}
                  className={`flex w-full items-center justify-between px-5 py-4 text-left transition ${
                    current.id === p.id ? "bg-[#F05A28]/15" : "hover:bg-white/5"
                  }`}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {String(i + 1).padStart(2, "0")} · {p.type}
                    </p>
                    <p className="mt-1 text-lg font-bold">{p.title}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#F05A28]">
                    {p.status}
                  </span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="px-5 py-8 text-sm text-white/40">
                  Nenhuma obra com esses filtros.
                </p>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden border border-[#F05A28]/35 bg-[#15202A]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-3xl font-bold">{current.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{current.location}</p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {current.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                    <div>
                      <dt className="text-white/35">Área</dt>
                      <dd className="mt-1 font-bold">{current.area}</dd>
                    </div>
                    <div>
                      <dt className="text-white/35">Ano</dt>
                      <dd className="mt-1 font-bold">{current.year}</dd>
                    </div>
                    <div>
                      <dt className="text-white/35">Tipo</dt>
                      <dd className="mt-1 font-bold">{current.type}</dd>
                    </div>
                    <div>
                      <dt className="text-white/35">Status</dt>
                      <dd className="mt-1 font-bold">{current.status}</dd>
                    </div>
                  </dl>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">O que entregamos</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-[#101820] p-8"
              >
                <p className="text-[11px] font-bold text-[#F05A28]">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="scroll-mt-24 border-t border-white/10 bg-[#0C1319] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
            Método
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Como conduzimos</h2>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {processSteps.map((step, i) => (
              <button
                key={step.n}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`min-w-[150px] flex-1 border px-4 py-3 text-left ${
                  activeStep === i
                    ? "border-[#F05A28] bg-[#F05A28] text-white"
                    : "border-white/10 text-white/50"
                }`}
              >
                <p className="text-[10px] font-bold tracking-widest">{step.n}</p>
                <p className="mt-1 text-sm font-bold">{step.title}</p>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/60"
            >
              {processSteps[activeStep].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
            Clientes
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Quem confia na Nobre</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 bg-[#15202A] p-6"
              >
                <p className="text-sm leading-7 text-white/70">“{t.text}”</p>
                <footer className="mt-6">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES / CTA */}
      <section className="border-y border-white/10 bg-[#15202A] py-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white/35 lg:px-8">
          {["ISO 9001", "PBQP-H", "CREA-SP", "BIM Ready", "Safety First"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>
      </section>

      <section id="orcamento" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative overflow-hidden border border-white/10">
            <Image
              src="/demonstracoes/nobre-engenharia/obra-2.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="relative z-10 px-6 py-16 text-center sm:px-12 sm:py-20">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Tem um projeto na mesa?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-white/60">
                Envie um briefing rápido. Retornamos com leitura técnica e
                próximos passos.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuoteOpen(true);
                  setQuoteSent(false);
                }}
                className="mt-8 bg-[#F05A28] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white"
              >
                Abrir formulário
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-xs text-white/35">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:justify-between lg:px-8">
          <span>NOBRE ENGENHARIA</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      <AnimatePresence>
        {quoteOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              aria-label="Fechar"
              onClick={() => setQuoteOpen(false)}
            />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              className="relative z-10 w-full max-w-md border border-white/10 bg-[#15202A] p-6"
            >
              {quoteSent ? (
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#F05A28]">
                    Briefing recebido
                  </p>
                  <p className="mt-3 text-xl font-bold">Vamos analisar e retornar.</p>
                  <button
                    type="button"
                    onClick={() => setQuoteOpen(false)}
                    className="mt-8 bg-[#F05A28] px-6 py-3 text-xs font-bold uppercase text-white"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={submitQuote} className="space-y-4">
                  <h3 className="text-xl font-bold">Solicitar briefing</h3>
                  <input
                    required
                    name="name"
                    placeholder="Nome"
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#F05A28]"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#F05A28]"
                  />
                  <select
                    name="type"
                    className="w-full border border-white/15 bg-[#15202A] px-4 py-3 text-sm outline-none focus:border-[#F05A28]"
                  >
                    <option>Residencial</option>
                    <option>Corporativo</option>
                    <option>Industrial</option>
                  </select>
                  <textarea
                    required
                    name="scope"
                    rows={3}
                    placeholder="Descreva o escopo"
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#F05A28]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#F05A28] py-3 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
