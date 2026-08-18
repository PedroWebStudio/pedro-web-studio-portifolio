"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Archivo, Syne } from "next/font/google";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft } from "@/components/icons";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-aurora",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo-aurora",
});

const ADDRESS = "Av. das Estrelas, 900 — Jardins, São Paulo — SP";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Av.+Paulista+1000+S%C3%A3o+Paulo&hl=pt-BR&z=15&output=embed";
const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Av.+das+Estrelas,+900,+S%C3%A3o+Paulo,+SP";

type Store = {
  name: string;
  floor: string;
  category: string;
  products: string[];
  open: string;
};

const stores: Store[] = [
  {
    name: "Nord Fashion",
    floor: "Piso 1",
    category: "Moda",
    products: ["Jeans", "Tênis", "Jaquetas"],
    open: "10h–22h",
  },
  {
    name: "Atlas Tech",
    floor: "Piso 2",
    category: "Eletrônicos",
    products: ["Celulares", "Fones", "Smartwatches"],
    open: "10h–22h",
  },
  {
    name: "Casa Lumière",
    floor: "Piso 1",
    category: "Casa",
    products: ["Decoração", "Louças", "Velas"],
    open: "10h–21h",
  },
  {
    name: "Pulse Sport",
    floor: "Piso 2",
    category: "Esporte",
    products: ["Tênis", "Legging", "Garrafas"],
    open: "10h–22h",
  },
  {
    name: "Bean & Co",
    floor: "Piso G",
    category: "Food",
    products: ["Café", "Brunch", "Doces"],
    open: "09h–22h",
  },
  {
    name: "Sakura Ramen",
    floor: "Piso G",
    category: "Food",
    products: ["Ramen", "Gyoza", "Chá"],
    open: "11h–22h",
  },
  {
    name: "Ótica Prisma",
    floor: "Piso 1",
    category: "Serviços",
    products: ["Óculos", "Lentes", "Armações"],
    open: "10h–21h",
  },
  {
    name: "Kids World",
    floor: "Piso 2",
    category: "Moda",
    products: ["Roupas kids", "Brinquedos", "Tênis"],
    open: "10h–21h",
  },
  {
    name: "Vinyl Room",
    floor: "Piso 2",
    category: "Eletrônicos",
    products: ["Discos", "Fones", "Caixas"],
    open: "12h–22h",
  },
  {
    name: "Green Market",
    floor: "Piso G",
    category: "Casa",
    products: ["Orgânicos", "Cestas", "Sucos"],
    open: "09h–21h",
  },
  {
    name: "Beauty Lab",
    floor: "Piso 1",
    category: "Serviços",
    products: ["Skincare", "Maquiagem", "Perfume"],
    open: "10h–22h",
  },
  {
    name: "Run Club Store",
    floor: "Piso 2",
    category: "Esporte",
    products: ["Corrida", "Relógios", "Meias"],
    open: "10h–22h",
  },
];

const categories = [
  "Todas",
  "Moda",
  "Eletrônicos",
  "Casa",
  "Esporte",
  "Food",
  "Serviços",
] as const;

const floors = ["Todos", "Piso G", "Piso 1", "Piso 2"] as const;

const productsCatalog = [
  { name: "Tênis limited", store: "Nord Fashion", tag: "Moda", price: "R$ 499" },
  { name: "Fone ANC Pro", store: "Atlas Tech", tag: "Eletrônicos", price: "R$ 899" },
  { name: "Kit café special", store: "Bean & Co", tag: "Food", price: "R$ 68" },
  { name: "Vela artesanal", store: "Casa Lumière", tag: "Casa", price: "R$ 89" },
  { name: "Legging performance", store: "Pulse Sport", tag: "Esporte", price: "R$ 219" },
  { name: "Skincare set", store: "Beauty Lab", tag: "Serviços", price: "R$ 320" },
  { name: "Ramen bowl", store: "Sakura Ramen", tag: "Food", price: "R$ 54" },
  { name: "Vinil raro", store: "Vinyl Room", tag: "Eletrônicos", price: "R$ 180" },
];

const sessions = [
  { time: "14:20", title: "Estrela Cadente", room: "Sala 3", tag: "Legendado" },
  { time: "16:40", title: "Noite na Cidade", room: "Sala 1", tag: "Dublado" },
  { time: "19:10", title: "Aurora Docs", room: "Sala 5", tag: "Documentário" },
  { time: "21:30", title: "After Hours", room: "Sala 2", tag: "Pré-estreia" },
];

const events = [
  {
    day: "18",
    month: "AGO",
    type: "Música",
    title: "DJ Set no Food Hall",
    text: "Sunset eletrônico com food trucks especiais.",
  },
  {
    day: "22",
    month: "AGO",
    type: "Cinema",
    title: "Pré-estreia Aurora",
    text: "Sessão exclusiva + meet & greet.",
  },
  {
    day: "26",
    month: "AGO",
    type: "Kids",
    title: "Oficina criativa",
    text: "Atividades para crianças no piso 2.",
  },
  {
    day: "30",
    month: "AGO",
    type: "Moda",
    title: "Pop-up de lançamentos",
    text: "Marcas convidadas no corredor central.",
  },
];

export default function ShoppingAurora() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof categories)[number]>("Todas");
  const [floor, setFloor] = useState<(typeof floors)[number]>("Todos");
  const [productTag, setProductTag] = useState("Todas");
  const [productQuery, setProductQuery] = useState("");
  const [eventType, setEventType] = useState("Todos");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const filteredStores = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores.filter((store) => {
      const matchCategory =
        category === "Todas" || store.category === category;
      const matchFloor = floor === "Todos" || store.floor === floor;
      const matchQuery =
        !q ||
        store.name.toLowerCase().includes(q) ||
        store.category.toLowerCase().includes(q) ||
        store.products.some((p) => p.toLowerCase().includes(q));
      return matchCategory && matchFloor && matchQuery;
    });
  }, [query, category, floor]);

  const filteredProducts = useMemo(() => {
    const q = productQuery.trim().toLowerCase();
    return productsCatalog.filter((item) => {
      const matchTag = productTag === "Todas" || item.tag === productTag;
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.store.toLowerCase().includes(q);
      return matchTag && matchQuery;
    });
  }, [productQuery, productTag]);

  const filteredEvents = useMemo(() => {
    if (eventType === "Todos") return events;
    return events.filter((e) => e.type === eventType);
  }, [eventType]);

  function jumpToDirectory(preset?: string) {
    if (preset) {
      setCategory(
        (categories.includes(preset as (typeof categories)[number])
          ? preset
          : "Todas") as (typeof categories)[number],
      );
      setQuery("");
    }
    document.getElementById("diretorio")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main
      className={`${syne.variable} ${archivo.variable} min-h-screen bg-[#07070C] text-white`}
      style={{ fontFamily: "var(--font-archivo-aurora)" }}
    >
      <style>{`
        @keyframes aurora-glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes aurora-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .aurora-glow {
          animation: aurora-glow 6s ease-in-out infinite;
        }
        .aurora-ticker {
          animation: aurora-ticker 28s linear infinite;
        }
      `}</style>

      {/* DEMO BAR */}
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#12121A]/95 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/50 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#2EE6A6] px-4 py-2 text-xs font-bold text-[#07070C] transition hover:bg-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeft className="h-3.5 w-3.5" />
          </span>
          Escolher outro projeto
        </Link>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070C]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#2EE6A6]/50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#2EE6A6]" />
            </span>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne-aurora)" }}
            >
              AURORA
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 md:flex">
            {[
              ["#diretorio", "Lojas"],
              ["#produtos", "Produtos"],
              ["#cinema", "Cinema"],
              ["#agenda", "Agenda"],
              ["#chegar", "Como chegar"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-[#2EE6A6]">
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => jumpToDirectory()}
            className="hidden bg-[#2EE6A6] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#07070C] transition hover:bg-white md:inline-flex"
          >
            Buscar loja
          </button>

          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="mb-1.5 block h-0.5 w-6 bg-white" />
            <span className="mb-1.5 block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col px-6 py-3">
                {[
                  ["#diretorio", "Lojas"],
                  ["#produtos", "Produtos"],
                  ["#cinema", "Cinema"],
                  ["#agenda", "Agenda"],
                  ["#chegar", "Como chegar"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm text-white/70"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO — full-bleed + busca central (não split L/R) */}
      <section className="relative overflow-hidden px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora-glow absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#2EE6A6]/20 blur-3xl" />
          <p
            aria-hidden
            className="absolute left-1/2 top-8 -translate-x-1/2 select-none text-[18vw] font-bold leading-none text-white/[0.03]"
            style={{ fontFamily: "var(--font-syne-aurora)" }}
          >
            AURORA
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#2EE6A6]"
          >
            Shopping · São Paulo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-syne-aurora)" }}
          >
            O diretório vivo
            <br />
            da cidade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55"
          >
            Busque lojas, filtre por categoria, veja o cinema e chegue sem
            stress. Tudo o que um shopping precisa — num só lugar.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            onSubmit={(e) => {
              e.preventDefault();
              jumpToDirectory();
            }}
            className="mx-auto mt-10 flex w-full max-w-xl overflow-hidden rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar loja, produto ou categoria..."
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2EE6A6] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#07070C] transition hover:bg-white"
            >
              Buscar
            </button>
          </motion.form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {["Moda", "Food", "Eletrônicos", "Esporte"].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => jumpToDirectory(chip)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/60 transition hover:border-[#2EE6A6] hover:text-[#2EE6A6]"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER STATUS */}
      <div className="overflow-hidden border-y border-white/10 bg-[#101018] py-3">
        <div className="aurora-ticker flex w-max gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex gap-10">
              {[
                "Aberto agora · até 22h",
                "180+ lojas",
                "Food hall · 42 operações",
                "Cinema · 8 salas",
                "Estacionamento · 2.400 vagas",
                "Wifi gratuito",
              ].map((item) => (
                <span key={`${loop}-${item}`} className="flex items-center gap-10">
                  <span className="text-[#2EE6A6]">●</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DIRETÓRIO DE LOJAS */}
      <section id="diretorio" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
                Diretório
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-syne-aurora)" }}
              >
                Encontre a loja certa
              </h2>
            </div>
            <p className="text-sm text-white/45">
              {filteredStores.length} resultado
              {filteredStores.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                    category === item
                      ? "bg-[#2EE6A6] text-[#07070C]"
                      : "border border-white/15 text-white/55 hover:border-[#2EE6A6]/50 hover:text-[#2EE6A6]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {floors.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFloor(item)}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                    floor === item
                      ? "bg-white text-[#07070C]"
                      : "bg-white/5 text-white/45 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar por nome ou produto..."
            className="mt-6 w-full border border-white/10 bg-[#101018] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#2EE6A6]/50"
          />

          <LayoutGroup>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              <AnimatePresence mode="popLayout">
                {filteredStores.length === 0 && (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center text-sm text-white/40"
                  >
                    Nenhuma loja encontrada com esses filtros.
                  </motion.p>
                )}
                {filteredStores.map((store) => (
                  <motion.button
                    layout
                    key={store.name}
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedStore(store)}
                    className="grid w-full grid-cols-1 gap-2 py-5 text-left transition hover:bg-white/[0.03] sm:grid-cols-[1.2fr_0.7fr_0.7fr_0.5fr] sm:items-center sm:gap-4"
                  >
                    <div>
                      <p
                        className="text-xl font-bold"
                        style={{ fontFamily: "var(--font-syne-aurora)" }}
                      >
                        {store.name}
                      </p>
                      <p className="mt-1 text-xs text-white/40">
                        {store.products.join(" · ")}
                      </p>
                    </div>
                    <p className="text-sm text-[#2EE6A6]">{store.category}</p>
                    <p className="text-sm text-white/50">{store.floor}</p>
                    <p className="text-sm text-white/40">{store.open}</p>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="scroll-mt-24 border-t border-white/10 bg-[#0C0C14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
              Vitrine
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-5xl"
              style={{ fontFamily: "var(--font-syne-aurora)" }}
            >
              Produtos em destaque
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              value={productQuery}
              onChange={(e) => setProductQuery(e.target.value)}
              placeholder="Pesquisar produto..."
              className="w-full border border-white/10 bg-[#101018] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#2EE6A6]/50 sm:max-w-xs"
            />
            <div className="flex flex-wrap gap-2">
              {["Todas", "Moda", "Eletrônicos", "Food", "Casa", "Esporte", "Serviços"].map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setProductTag(tag)}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                      productTag === tag
                        ? "bg-[#2EE6A6] text-[#07070C]"
                        : "border border-white/15 text-white/50"
                    }`}
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((item) => (
                <motion.article
                  layout
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="min-w-[220px] flex-shrink-0 border border-white/10 bg-[#07070C] p-5"
                >
                  <div className="mb-8 aspect-[4/3] bg-gradient-to-br from-[#2EE6A6]/25 to-transparent" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2EE6A6]">
                    {item.tag}
                  </p>
                  <h3
                    className="mt-2 text-lg font-bold"
                    style={{ fontFamily: "var(--font-syne-aurora)" }}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{item.store}</p>
                  <p className="mt-4 text-sm font-semibold text-white">{item.price}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CINEMA — faixa horizontal */}
      <section id="cinema" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
                Cinema Aurora
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-syne-aurora)" }}
              >
                Sessões de hoje
              </h2>
            </div>
            <p className="hidden text-sm text-white/40 sm:block">8 salas · 2D / 3D</p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sessions.map((session, index) => (
              <motion.div
                key={session.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
                whileHover={{ y: -4 }}
                className="border border-white/10 bg-[#101018] p-5"
              >
                <p
                  className="text-3xl font-bold text-[#2EE6A6]"
                  style={{ fontFamily: "var(--font-syne-aurora)" }}
                >
                  {session.time}
                </p>
                <h3 className="mt-3 text-lg font-bold">{session.title}</h3>
                <p className="mt-2 text-xs text-white/40">
                  {session.room} · {session.tag}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="scroll-mt-24 border-t border-white/10 bg-[#0C0C14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
                Agenda
              </p>
              <h2
                className="mt-3 text-3xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-syne-aurora)" }}
              >
                O que rola no mês
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Todos", "Música", "Cinema", "Kids", "Moda"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEventType(type)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                    eventType === type
                      ? "bg-[#2EE6A6] text-[#07070C]"
                      : "border border-white/15 text-white/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  layout
                  key={event.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  className="flex flex-col gap-4 border border-white/10 bg-[#07070C] p-5 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div className="min-w-[72px]">
                    <p
                      className="text-3xl font-bold text-[#2EE6A6]"
                      style={{ fontFamily: "var(--font-syne-aurora)" }}
                    >
                      {event.day}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {event.month}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      {event.type}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{event.title}</h3>
                    <p className="mt-1 text-sm text-white/45">{event.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* COMO CHEGAR */}
      <section id="chegar" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
              Visite
            </p>
            <h2
              className="mt-3 text-3xl font-bold sm:text-5xl"
              style={{ fontFamily: "var(--font-syne-aurora)" }}
            >
              Como chegar
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
              {ADDRESS}
              <br />
              Aberto todos os dias · 10h às 22h
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Metrô", "Estação Trianon-Masp · 8 min a pé"],
              ["Carro", "2.400 vagas · 2h grátis com validação"],
              ["App", "Waze / Maps · destino Shopping Aurora"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-white/10 bg-[#101018] px-5 py-6 text-center"
              >
                <p
                  className="text-lg font-bold text-[#2EE6A6]"
                  style={{ fontFamily: "var(--font-syne-aurora)" }}
                >
                  {title}
                </p>
                <p className="mt-2 text-sm text-white/45">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden border border-[#2EE6A6]/35">
            <iframe
              title="Mapa Shopping Aurora"
              src={MAPS_EMBED}
              className="h-[300px] w-full grayscale contrast-125 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={MAPS_DIR}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2EE6A6] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#07070C] transition hover:bg-white"
            >
              Abrir rota no Maps
            </a>
            <a
              href="tel:+551130000000"
              className="border border-white/20 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#2EE6A6] hover:text-[#2EE6A6]"
            >
              Central Aurora
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-white/35">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span style={{ fontFamily: "var(--font-syne-aurora)" }}>
            SHOPPING AURORA
          </span>
          <span>© {new Date().getFullYear()} · Todos os direitos reservados.</span>
        </div>
      </footer>

      {/* STORE DETAIL SHEET */}
      <AnimatePresence>
        {selectedStore && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Fechar"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedStore(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-md border border-white/10 bg-[#101018] p-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2EE6A6]">
                {selectedStore.category} · {selectedStore.floor}
              </p>
              <h3
                className="mt-3 text-3xl font-bold"
                style={{ fontFamily: "var(--font-syne-aurora)" }}
              >
                {selectedStore.name}
              </h3>
              <p className="mt-3 text-sm text-white/50">
                Horário: {selectedStore.open}
              </p>
              <p className="mt-4 text-sm text-white/70">
                Destaques: {selectedStore.products.join(", ")}
              </p>
              <button
                type="button"
                onClick={() => setSelectedStore(null)}
                className="mt-8 w-full bg-[#2EE6A6] py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#07070C]"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
