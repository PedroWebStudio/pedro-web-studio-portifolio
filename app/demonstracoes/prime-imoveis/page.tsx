"use client";

import { AnimatePresence, motion } from "framer-motion";
import { DM_Sans, Fraunces } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-prime-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-prime-sans",
});

type Property = {
  id: string;
  type: "Apartamento" | "Casa" | "Cobertura" | "Comercial";
  title: string;
  location: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  tag: string;
  image: string;
};

const properties: Property[] = [
  {
    id: "1",
    type: "Apartamento",
    title: "Apartamento Jardins",
    location: "Jardins · São Paulo",
    neighborhood: "Jardins",
    price: 1850000,
    beds: 3,
    baths: 2,
    area: 142,
    tag: "Pronto",
    image: "/demonstracoes/prime-imoveis/apt-1.jpg",
  },
  {
    id: "2",
    type: "Casa",
    title: "Casa Alto da Boa Vista",
    location: "Alto da Boa Vista · SP",
    neighborhood: "Alto da Boa Vista",
    price: 2490000,
    beds: 4,
    baths: 3,
    area: 280,
    tag: "Exclusivo",
    image: "/demonstracoes/prime-imoveis/apt-2.jpg",
  },
  {
    id: "3",
    type: "Cobertura",
    title: "Cobertura Vila Madalena",
    location: "Vila Madalena · SP",
    neighborhood: "Vila Madalena",
    price: 3200000,
    beds: 4,
    baths: 4,
    area: 315,
    tag: "Vista",
    image: "/demonstracoes/prime-imoveis/apt-3.jpg",
  },
  {
    id: "4",
    type: "Apartamento",
    title: "Studio Pinheiros",
    location: "Pinheiros · SP",
    neighborhood: "Pinheiros",
    price: 890000,
    beds: 1,
    baths: 1,
    area: 48,
    tag: "Investimento",
    image: "/demonstracoes/prime-imoveis/apt-4.jpg",
  },
  {
    id: "5",
    type: "Comercial",
    title: "Sala Faria Lima",
    location: "Itaim · SP",
    neighborhood: "Itaim",
    price: 2100000,
    beds: 0,
    baths: 2,
    area: 95,
    tag: "Corporativo",
    image: "/demonstracoes/prime-imoveis/apt-5.jpg",
  },
  {
    id: "6",
    type: "Casa",
    title: "Casa Morumbi",
    location: "Morumbi · SP",
    neighborhood: "Morumbi",
    price: 4100000,
    beds: 5,
    baths: 5,
    area: 420,
    tag: "Premium",
    image: "/demonstracoes/prime-imoveis/apt-6.jpg",
  },
];

const neighborhoods = [
  "Todos",
  "Jardins",
  "Vila Madalena",
  "Pinheiros",
  "Itaim",
  "Morumbi",
  "Alto da Boa Vista",
];

const neighborhoodGallery = [
  {
    name: "Jardins",
    label: "Árvore, cultura e prestígio",
    image: "/demonstracoes/prime-imoveis/apt-1.jpg",
  },
  {
    name: "Vila Madalena",
    label: "Vibe criativa e vista aberta",
    image: "/demonstracoes/prime-imoveis/apt-3.jpg",
  },
  {
    name: "Pinheiros",
    label: "Conectividade e vida urbana",
    image: "/demonstracoes/prime-imoveis/apt-4.jpg",
  },
  {
    name: "Itaim",
    label: "Negócios e alto padrão",
    image: "/demonstracoes/prime-imoveis/apt-5.jpg",
  },
  {
    name: "Morumbi",
    label: "Espaço, verde e silêncio",
    image: "/demonstracoes/prime-imoveis/apt-6.jpg",
  },
  {
    name: "Alto da Boa Vista",
    label: "Casas com assinatura",
    image: "/demonstracoes/prime-imoveis/apt-2.jpg",
  },
];

const team = [
  { name: "Helena Costa", role: "Consultora sênior", focus: "Jardins & Pinheiros" },
  { name: "Ricardo Vale", role: "Especialista residencial", focus: "Casas & coberturas" },
  { name: "Marina Duarte", role: "Corporativo", focus: "Itaim & Faria Lima" },
  { name: "Sofia Mendes", role: "Relacionamento", focus: "Clientes prioritários" },
];

const testimonials = [
  {
    quote:
      "A Prime encontrou o endereço certo em duas semanas — com curadoria, não volume.",
    name: "Camila R.",
    role: "Compradora · Jardins",
  },
  {
    quote:
      "Comparativo claro, fotos honestas e acompanhamento do começo ao fechamento.",
    name: "André L.",
    role: "Investidor · Pinheiros",
  },
  {
    quote:
      "Senti que cada visita tinha propósito. Zero tempo perdido com imóveis fora do perfil.",
    name: "Patricia N.",
    role: "Cliente · Morumbi",
  },
];

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export default function PrimeImoveis() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [type, setType] = useState("Todos");
  const [neighborhood, setNeighborhood] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [minBeds, setMinBeds] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = properties.slice(0, 3);
  const activeFeatured = featured[featuredIndex];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (showFavOnly && !favorites.includes(p.id)) return false;
      if (type !== "Todos" && p.type !== type) return false;
      if (neighborhood !== "Todos" && p.neighborhood !== neighborhood)
        return false;
      if (p.price > maxPrice) return false;
      if (minBeds > 0 && p.beds < minBeds) return false;
      return true;
    });
  }, [type, neighborhood, maxPrice, minBeds, favorites, showFavOnly]);

  function toggleFav(id: string) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function toggleCompare(id: string) {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  }

  const compareItems = properties.filter((p) => compare.includes(p.id));

  return (
    <main
      className={`${display.variable} ${sans.variable} min-h-screen bg-[#11151C] text-[#F4F1EA]`}
      style={{ fontFamily: "var(--font-prime-sans)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#1A1F28]/95 p-1.5 shadow-xl backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/50 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#C6A15B] px-4 py-2 text-xs font-semibold text-[#11151C] transition hover:bg-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#11151C]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-baseline gap-2">
            <span
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-prime-display)" }}
            >
              Prime
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C6A15B]">
              Imóveis
            </span>
          </a>
          <nav className="hidden gap-7 text-[11px] uppercase tracking-[0.18em] text-white/45 md:flex">
            {[
              ["#destaques", "Destaques"],
              ["#sobre", "A Prime"],
              ["#busca", "Buscar"],
              ["#bairros", "Bairros"],
              ["#comparar", "Comparar"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#C6A15B]">
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setShowFavOnly((v) => !v)}
            className={`hidden text-[11px] uppercase tracking-[0.16em] md:inline ${
              showFavOnly ? "text-[#C6A15B]" : "text-white/50"
            }`}
          >
            Favoritos ({favorites.length})
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
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col px-6 py-3 text-sm">
                {[
                  ["#destaques", "Destaques"],
                  ["#sobre", "A Prime"],
                  ["#busca", "Buscar"],
                  ["#bairros", "Bairros"],
                  ["#comparar", "Comparar"],
                  ["#contato", "Contato"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3"
                  >
                    {label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setShowFavOnly(true);
                    setMenuOpen(false);
                    document.getElementById("busca")?.scrollIntoView();
                  }}
                  className="py-3 text-left text-[#C6A15B]"
                >
                  Favoritos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO — full-bleed property carousel */}
      <section id="destaques" className="relative min-h-[88vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeatured.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={activeFeatured.image}
              alt={activeFeatured.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/55 to-[#11151C]/25" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-24 pt-28 lg:px-8">
          <motion.p
            key={`tag-${activeFeatured.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]"
          >
            Destaque {String(featuredIndex + 1).padStart(2, "0")} / 03 ·{" "}
            {activeFeatured.tag}
          </motion.p>
          <motion.h1
            key={`title-${activeFeatured.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            {activeFeatured.title}
          </motion.h1>
          <motion.p
            key={`meta-${activeFeatured.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-sm text-white/70"
          >
            {activeFeatured.location} · {activeFeatured.area} m² ·{" "}
            {activeFeatured.beds || "—"} dorms
          </motion.p>
          <motion.p
            key={`price-${activeFeatured.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl text-[#C6A15B] sm:text-4xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            {formatPrice(activeFeatured.price)}
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setFeaturedIndex((i) => (i + 1) % featured.length)
              }
              className="border border-white/30 bg-black/20 px-5 py-3 text-[11px] uppercase tracking-[0.16em] backdrop-blur transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              Próximo destaque →
            </button>
            <a
              href="#busca"
              className="bg-[#C6A15B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#11151C]"
            >
              Ver todos
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {featured.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`Destaque ${i + 1}`}
              onClick={() => setFeaturedIndex(i)}
              className={`h-1.5 w-8 transition ${
                featuredIndex === i ? "bg-[#C6A15B]" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
            <Image
              src="/demonstracoes/prime-imoveis/hero.jpg"
              alt="Interior de alto padrão Prime Imóveis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11151C]/50 to-transparent" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
              Por que a Prime
            </p>
            <h2
              className="mt-4 text-3xl sm:text-5xl"
              style={{ fontFamily: "var(--font-prime-display)" }}
            >
              Curadoria discreta para endereços que importam
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Selecionamos imóveis com critério editorial: localização, luz,
              proporção e potencial de valorização. Menos listagens, mais
              precisão — do primeiro contato à chave na mão.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/60">
              {[
                "Seleção exclusiva em bairros premium de São Paulo",
                "Visitas acompanhadas e comparativos objetivos",
                "Consultores especializados por perfil de cliente",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C6A15B]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BUSCA */}
      <section
        id="busca"
        className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
                Busca inteligente
              </p>
              <h2
                className="mt-3 text-3xl sm:text-5xl"
                style={{ fontFamily: "var(--font-prime-display)" }}
              >
                Encontre o endereço certo
              </h2>
            </div>
            <p className="text-sm text-white/40">
              {filtered.length} imóvel{filtered.length === 1 ? "" : "eis"}
            </p>
          </div>

          <div className="mt-8 grid gap-4 border border-white/10 bg-[#1A1F28] p-5 sm:grid-cols-2 lg:grid-cols-4">
            <label className="text-xs">
              <span className="text-white/40">Tipo</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-[#11151C] px-3 py-2.5 text-sm outline-none focus:border-[#C6A15B]"
              >
                {[
                  "Todos",
                  "Apartamento",
                  "Casa",
                  "Cobertura",
                  "Comercial",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="text-xs">
              <span className="text-white/40">Região</span>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-[#11151C] px-3 py-2.5 text-sm outline-none focus:border-[#C6A15B]"
              >
                {neighborhoods.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="text-xs">
              <span className="text-white/40">
                Até {formatPrice(maxPrice)}
              </span>
              <input
                type="range"
                min={800000}
                max={5000000}
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-4 w-full accent-[#C6A15B]"
              />
            </label>
            <label className="text-xs">
              <span className="text-white/40">Dormitórios mín.</span>
              <div className="mt-2 flex gap-2">
                {[0, 1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setMinBeds(n)}
                    className={`flex-1 py-2.5 text-sm ${
                      minBeds === n
                        ? "bg-[#C6A15B] text-[#11151C]"
                        : "border border-white/15"
                    }`}
                  >
                    {n === 0 ? "Any" : n}
                  </button>
                ))}
              </div>
            </label>
          </div>

          <div className="mt-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-0 overflow-hidden border border-white/10 bg-[#1A1F28] sm:grid-cols-[220px_1fr]"
                >
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[180px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 220px"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B]">
                        {p.type} · {p.tag}
                      </p>
                      <h3
                        className="mt-1 text-2xl"
                        style={{ fontFamily: "var(--font-prime-display)" }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/45">{p.location}</p>
                      <p className="mt-3 text-sm text-white/55">
                        {p.beds ? `${p.beds} dorms · ` : ""}
                        {p.baths} banheiros · {p.area} m²
                      </p>
                      <p
                        className="mt-3 text-xl text-[#C6A15B]"
                        style={{ fontFamily: "var(--font-prime-display)" }}
                      >
                        {formatPrice(p.price)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-col">
                      <button
                        type="button"
                        onClick={() => toggleFav(p.id)}
                        className={`px-4 py-2 text-[11px] uppercase tracking-wider ${
                          favorites.includes(p.id)
                            ? "bg-[#C6A15B] text-[#11151C]"
                            : "border border-white/20"
                        }`}
                      >
                        {favorites.includes(p.id) ? "Favorito" : "Favoritar"}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCompare(p.id)}
                        className={`px-4 py-2 text-[11px] uppercase tracking-wider ${
                          compare.includes(p.id)
                            ? "border border-[#C6A15B] text-[#C6A15B]"
                            : "border border-white/20"
                        }`}
                      >
                        {compare.includes(p.id)
                          ? "Na comparação"
                          : "Comparar"}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-white/40">
                Nenhum imóvel com esses filtros.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* BAIRROS */}
      <section
        id="bairros"
        className="scroll-mt-24 border-t border-white/10 bg-[#0E1218] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Regiões
          </p>
          <h2
            className="mt-3 text-3xl sm:text-5xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            Bairros com assinatura Prime
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoodGallery.map((n, i) => (
              <motion.button
                key={n.name}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setNeighborhood(n.name);
                  document.getElementById("busca")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group relative aspect-[4/3] overflow-hidden text-left"
              >
                <Image
                  src={n.image}
                  alt={n.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-prime-display)" }}
                  >
                    {n.name}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{n.label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAR */}
      <section
        id="comparar"
        className="scroll-mt-24 border-t border-white/10 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-5xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            Comparar imóveis
          </h2>
          <p className="mt-3 text-sm text-white/45">
            Selecione até 2 imóveis na busca para comparar lado a lado.
          </p>

          {compareItems.length === 0 ? (
            <p className="mt-10 text-sm text-white/35">
              Nenhum imóvel selecionado ainda.
            </p>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {compareItems.map((p) => (
                <div
                  key={p.id}
                  className="overflow-hidden border border-[#C6A15B]/40 bg-[#1A1F28]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "var(--font-prime-display)" }}
                    >
                      {p.title}
                    </h3>
                    <dl className="mt-6 space-y-3 text-sm">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <dt className="text-white/40">Preço</dt>
                        <dd>{formatPrice(p.price)}</dd>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <dt className="text-white/40">Área</dt>
                        <dd>{p.area} m²</dd>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <dt className="text-white/40">Dorms</dt>
                        <dd>{p.beds || "—"}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-white/40">Região</dt>
                        <dd>{p.neighborhood}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-white/10 bg-[#0E1218] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Equipe
          </p>
          <h2
            className="mt-3 text-3xl sm:text-5xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            Consultores
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-white/10 bg-[#151A22] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#C6A15B]/40 text-sm text-[#C6A15B]">
                  {person.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <p
                  className="mt-5 text-xl"
                  style={{ fontFamily: "var(--font-prime-display)" }}
                >
                  {person.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C6A15B]">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-white/45">{person.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Depoimentos
          </p>
          <h2
            className="mt-3 text-3xl sm:text-5xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            Quem já fechou com a Prime
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border-t border-[#C6A15B]/50 pt-6"
              >
                <p className="text-sm leading-7 text-white/65">“{t.quote}”</p>
                <footer className="mt-6">
                  <p
                    className="text-lg"
                    style={{ fontFamily: "var(--font-prime-display)" }}
                  >
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/10 py-20 sm:py-28"
      >
        <div className="absolute inset-0">
          <Image
            src="/demonstracoes/prime-imoveis/apt-3.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#11151C]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Consultoria
          </p>
          <h2
            className="mt-4 text-3xl sm:text-5xl"
            style={{ fontFamily: "var(--font-prime-display)" }}
          >
            Fale com um consultor
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
            Conte o perfil do imóvel. Retornamos com opções alinhadas ao seu
            momento — sem spam de listagens.
          </p>
          <a
            href="mailto:contato@primeimoveis.com.br"
            className="mt-8 inline-flex bg-[#C6A15B] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#11151C]"
          >
            Enviar e-mail
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-28 pt-10 text-xs text-white/35">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div>
            <p
              className="text-2xl text-white"
              style={{ fontFamily: "var(--font-prime-display)" }}
            >
              Prime
            </p>
            <p className="mt-2 max-w-xs text-white/40">
              Imóveis selecionados em São Paulo. Demonstração visual do Pedro
              Web Studio.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#busca" className="hover:text-[#C6A15B]">
              Buscar
            </a>
            <a href="#bairros" className="hover:text-[#C6A15B]">
              Bairros
            </a>
            <a href="#contato" className="hover:text-[#C6A15B]">
              Contato
            </a>
          </div>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
