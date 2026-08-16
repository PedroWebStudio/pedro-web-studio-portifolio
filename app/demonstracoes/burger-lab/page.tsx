"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Barlow_Condensed, Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bl-display",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-bl-sans",
});

type Burger = {
  id: string;
  name: string;
  desc: string;
  price: number;
  tags: ("smash" | "spicy" | "veggie" | "classic")[];
  image: string;
};

const burgers: Burger[] = [
  {
    id: "lab-smash",
    name: "Lab Smash",
    desc: "Blend 180g, cheddar, picles e molho da casa.",
    price: 32,
    tags: ["smash", "classic"],
    image: "/demonstracoes/burger-lab/burger-1.jpg",
  },
  {
    id: "double-smoke",
    name: "Double Smoke",
    desc: "Dois smash, bacon crisp e onion jam.",
    price: 42,
    tags: ["smash"],
    image: "/demonstracoes/burger-lab/burger-2.jpg",
  },
  {
    id: "green-fire",
    name: "Green Fire",
    desc: "Burger no ponto, guacamole e jalapeño.",
    price: 38,
    tags: ["spicy", "veggie"],
    image: "/demonstracoes/burger-lab/burger-3.jpg",
  },
  {
    id: "classic-lab",
    name: "Classic Lab",
    desc: "Alface, tomate e molho secreto.",
    price: 34,
    tags: ["classic"],
    image: "/demonstracoes/burger-lab/burger-4.jpg",
  },
  {
    id: "heat-wave",
    name: "Heat Wave",
    desc: "Blend 200g, cheddar, chipotle e pimenta.",
    price: 40,
    tags: ["spicy", "smash"],
    image: "/demonstracoes/burger-lab/burger-1.jpg",
  },
  {
    id: "garden-stack",
    name: "Garden Stack",
    desc: "Burger plant-based, rúcula e aioli.",
    price: 36,
    tags: ["veggie"],
    image: "/demonstracoes/burger-lab/burger-3.jpg",
  },
];

const combos = [
  {
    id: "smash-combo",
    name: "Smash Combo",
    desc: "Lab Smash + batata lab + refrigerante.",
    price: 52,
    image: "/demonstracoes/burger-lab/burger-1.jpg",
  },
  {
    id: "smoke-duo",
    name: "Smoke Duo",
    desc: "Double Smoke + batata + milkshake.",
    price: 68,
    image: "/demonstracoes/burger-lab/burger-2.jpg",
  },
  {
    id: "fire-pack",
    name: "Fire Pack",
    desc: "Green Fire + onion rings + limonada.",
    price: 58,
    image: "/demonstracoes/burger-lab/burger-3.jpg",
  },
];

const extras = [
  { id: "bacon", name: "Bacon crisp", price: 6 },
  { id: "egg", name: "Ovo", price: 4 },
  { id: "cheese", name: "Cheddar extra", price: 5 },
  { id: "fries", name: "Batata lab", price: 16 },
];

const reviews = [
  {
    name: "Leo M.",
    text: "Smash no ponto certo. Molho da casa vicia — já virou ritual de sexta.",
  },
  {
    name: "Ana K.",
    text: "Ambiente de lab de verdade. Pedi o Double Smoke e não me arrependi.",
  },
  {
    name: "Bruno T.",
    text: "Montagem fácil no app e burger quente. Heat Wave é o meu favorito.",
  },
];

const igStrip = [
  "/demonstracoes/burger-lab/burger-1.jpg",
  "/demonstracoes/burger-lab/burger-2.jpg",
  "/demonstracoes/burger-lab/lab.jpg",
  "/demonstracoes/burger-lab/burger-3.jpg",
  "/demonstracoes/burger-lab/burger-4.jpg",
  "/demonstracoes/burger-lab/hero.jpg",
];

type CartItem = {
  key: string;
  burgerId: string;
  name: string;
  basePrice: number;
  extras: string[];
  qty: number;
};

export default function BurgerLab() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("todos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [builderId, setBuilderId] = useState<string | null>(null);
  const [pickedExtras, setPickedExtras] = useState<string[]>([]);
  const [orderDone, setOrderDone] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "todos") return burgers;
    return burgers.filter((b) =>
      b.tags.includes(filter as Burger["tags"][number]),
    );
  }, [filter]);

  const building = burgers.find((b) => b.id === builderId) ?? null;

  const cartTotal = cart.reduce((sum, item) => {
    const extraSum = item.extras.reduce((s, id) => {
      const ex = extras.find((e) => e.id === id);
      return s + (ex?.price ?? 0);
    }, 0);
    return sum + (item.basePrice + extraSum) * item.qty;
  }, 0);

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);

  function addToCart() {
    if (!building) return;
    const key = `${building.id}-${pickedExtras.slice().sort().join(",")}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [
        ...prev,
        {
          key,
          burgerId: building.id,
          name: building.name,
          basePrice: building.price,
          extras: pickedExtras,
          qty: 1,
        },
      ];
    });
    setBuilderId(null);
    setPickedExtras([]);
    setCartOpen(true);
  }

  function addComboToCart(combo: (typeof combos)[number]) {
    const key = `combo-${combo.id}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [
        ...prev,
        {
          key,
          burgerId: combo.id,
          name: combo.name,
          basePrice: combo.price,
          extras: [],
          qty: 1,
        },
      ];
    });
    setCartOpen(true);
  }

  function changeQty(key: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }

  return (
    <main
      className={`${barlow.variable} ${rubik.variable} min-h-screen bg-[#0E0E0E] text-white`}
      style={{ fontFamily: "var(--font-bl-sans)" }}
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

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="fixed bottom-24 right-5 z-40 flex items-center gap-2 rounded-full bg-[#F5B942] px-4 py-3 text-xs font-black uppercase tracking-wider text-black shadow-lg"
      >
        Sacola
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1 text-[10px] text-[#F5B942]">
          {cartCount}
        </span>
      </button>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0E0E0E]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center bg-[#F5B942] text-sm font-black text-black">
              BL
            </span>
            <span
              className="text-2xl font-extrabold uppercase tracking-wide"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Burger Lab
            </span>
          </a>
          <nav className="hidden gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45 md:flex">
            {[
              ["#menu", "Menu"],
              ["#combos", "Combos"],
              ["#lab", "O lab"],
              ["#horarios", "Horários"],
              ["#reviews", "Reviews"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#F5B942]">
                {label}
              </a>
            ))}
          </nav>
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
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col px-6 py-3 text-sm font-bold uppercase">
                {[
                  ["#menu", "Menu"],
                  ["#combos", "Combos"],
                  ["#lab", "O lab"],
                  ["#horarios", "Horários"],
                  ["#reviews", "Reviews"],
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO — full-bleed with typography overlay */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/demonstracoes/burger-lab/hero.jpg"
            alt="Burger Lab hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/40" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-28">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#F5B942]"
          >
            Smash · Craft · Lab
          </motion.p>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
            className="mt-4 max-w-3xl text-[16vw] font-extrabold uppercase leading-[0.85] tracking-tight sm:text-[7rem]"
            style={{ fontFamily: "var(--font-bl-display)" }}
          >
            Burgers
            <br />
            <span className="text-[#F5B942]">that hit</span>
            <br />
            different.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#menu"
              className="bg-[#F5B942] px-6 py-3 text-xs font-black uppercase tracking-wider text-black"
            >
              Montar pedido
            </a>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="border border-white/30 bg-black/30 px-6 py-3 text-xs font-black uppercase tracking-wider backdrop-blur"
            >
              Ver sacola
            </button>
          </motion.div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="text-4xl font-extrabold uppercase sm:text-6xl"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Cardápio lab
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                ["todos", "Todos"],
                ["smash", "Smash"],
                ["spicy", "Spicy"],
                ["veggie", "Veggie"],
                ["classic", "Classic"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={`px-3 py-1.5 text-[11px] font-black uppercase tracking-wider ${
                    filter === id
                      ? "bg-[#F5B942] text-black"
                      : "border border-white/20 text-white/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((burger, index) => (
                <motion.div
                  layout
                  key={burger.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="grid gap-0 overflow-hidden border border-white/10 sm:grid-cols-[160px_1fr]"
                >
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[140px]">
                    <Image
                      src={burger.image}
                      alt={burger.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 160px"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p
                        className="text-3xl font-extrabold uppercase"
                        style={{ fontFamily: "var(--font-bl-display)" }}
                      >
                        {burger.name}
                      </p>
                      <p className="mt-1 max-w-md text-sm text-white/50">
                        {burger.desc}
                      </p>
                      <div className="mt-2 flex gap-2">
                        {burger.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold uppercase tracking-wider text-[#F5B942]/80"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p
                        className="text-3xl font-extrabold text-[#F5B942]"
                        style={{ fontFamily: "var(--font-bl-display)" }}
                      >
                        R${burger.price}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setBuilderId(burger.id);
                          setPickedExtras([]);
                        }}
                        className="bg-white px-4 py-3 text-[11px] font-black uppercase tracking-wider text-black transition hover:bg-[#F5B942]"
                      >
                        + Montar
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* COMBOS */}
      <section
        id="combos"
        className="scroll-mt-24 border-t border-white/10 bg-[#141414] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2
            className="text-4xl font-extrabold uppercase sm:text-6xl"
            style={{ fontFamily: "var(--font-bl-display)" }}
          >
            Combos do lab
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/50">
            Mais smash, menos decisão. Combos prontos pra bater na chapa.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {combos.map((combo, i) => (
              <motion.article
                key={combo.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={combo.image}
                    alt={combo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p
                    className="text-2xl font-extrabold uppercase"
                    style={{ fontFamily: "var(--font-bl-display)" }}
                  >
                    {combo.name}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{combo.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="text-2xl font-extrabold text-[#F5B942]"
                      style={{ fontFamily: "var(--font-bl-display)" }}
                    >
                      R${combo.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => addComboToCart(combo)}
                      className="bg-[#F5B942] px-3 py-2 text-[10px] font-black uppercase tracking-wider text-black"
                    >
                      + Sacola
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LAB STORY */}
      <section
        id="lab"
        className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/demonstracoes/burger-lab/lab.jpg"
              alt="Cozinha do Burger Lab"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F5B942]">
              O lab
            </p>
            <h2
              className="mt-3 text-4xl font-extrabold uppercase sm:text-5xl"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Feito na chapa,
              <br />
              pensado no lab
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Blend próprio, smash na chapa quente e molhos da casa. Sem
              firula — só burger que bate diferente. Testamos proporção, ponto e
              textura até o smash ficar redondo.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/60">
              {[
                "Blend diário, nunca congelado",
                "Molhos fermentados na casa",
                "Pão brioche assado local",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#F5B942]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section
        id="horarios"
        className="scroll-mt-24 border-t border-white/10 bg-[#141414] py-14 sm:py-20"
      >
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2
              className="text-4xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Horários
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Terça — Quinta", "12h – 23h"],
                ["Sexta — Sábado", "12h – 00h"],
                ["Domingo", "12h – 22h"],
                ["Segunda", "Fechado"],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <dt className="text-white/50">{day}</dt>
                  <dd
                    className="font-extrabold uppercase text-[#F5B942]"
                    style={{ fontFamily: "var(--font-bl-display)" }}
                  >
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2
              className="text-4xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Local
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/55">
              Rua dos Experimentos, 180
              <br />
              Vila Madalena · São Paulo
            </p>
            <p className="mt-4 text-sm text-white/40">
              Retirada no balcão ou delivery na região. Estacionamento parceiro
              na esquina.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-flex border border-[#F5B942] px-5 py-3 text-[11px] font-black uppercase tracking-wider text-[#F5B942]"
            >
              Ver cardápio
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2
            className="text-4xl font-extrabold uppercase sm:text-5xl"
            style={{ fontFamily: "var(--font-bl-display)" }}
          >
            Reviews do lab
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.blockquote
                key={r.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-l-2 border-[#F5B942] pl-5"
              >
                <p className="text-sm leading-7 text-white/60">“{r.text}”</p>
                <footer
                  className="mt-4 text-sm font-extrabold uppercase text-[#F5B942]"
                  style={{ fontFamily: "var(--font-bl-display)" }}
                >
                  {r.name}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F5B942]">
            @burgerlab
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {igStrip.map((src, i) => (
            <motion.div
              key={`${src}-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt={`Burger Lab foto ${i + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 16vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 pb-28 pt-10 text-xs text-white/35">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-2xl font-extrabold uppercase text-white"
              style={{ fontFamily: "var(--font-bl-display)" }}
            >
              Burger Lab
            </p>
            <p className="mt-2 max-w-xs text-white/40">
              Smash craft em Vila Madalena. Demonstração visual do Pedro Web
              Studio.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 uppercase tracking-wider">
            <a href="#menu" className="hover:text-[#F5B942]">
              Menu
            </a>
            <a href="#combos" className="hover:text-[#F5B942]">
              Combos
            </a>
            <a href="#horarios" className="hover:text-[#F5B942]">
              Horários
            </a>
          </div>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      {/* BUILDER MODAL */}
      <AnimatePresence>
        {building && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75"
              aria-label="Fechar"
              onClick={() => setBuilderId(null)}
            />
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 30 }}
              className="relative z-10 w-full max-w-md overflow-hidden border border-white/10 bg-[#1A1A1A]"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={building.image}
                  alt={building.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F5B942]">
                  Montar
                </p>
                <h3
                  className="mt-2 text-3xl font-extrabold uppercase"
                  style={{ fontFamily: "var(--font-bl-display)" }}
                >
                  {building.name}
                </h3>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-white/40">
                  Extras
                </p>
                <div className="mt-3 space-y-2">
                  {extras.map((ex) => {
                    const on = pickedExtras.includes(ex.id);
                    return (
                      <button
                        key={ex.id}
                        type="button"
                        onClick={() =>
                          setPickedExtras((prev) =>
                            on
                              ? prev.filter((x) => x !== ex.id)
                              : [...prev, ex.id],
                          )
                        }
                        className={`flex w-full items-center justify-between border px-4 py-3 text-sm ${
                          on
                            ? "border-[#F5B942] bg-[#F5B942]/10"
                            : "border-white/10"
                        }`}
                      >
                        <span>{ex.name}</span>
                        <span>+ R${ex.price}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={addToCart}
                  className="mt-6 w-full bg-[#F5B942] py-3.5 text-xs font-black uppercase tracking-wider text-black"
                >
                  Adicionar à sacola
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CART DRAWER */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              aria-label="Fechar"
              onClick={() => {
                setCartOpen(false);
                setOrderDone(false);
              }}
            />
            <motion.aside
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#141414] p-6"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-2xl font-extrabold uppercase"
                  style={{ fontFamily: "var(--font-bl-display)" }}
                >
                  Sacola
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false);
                    setOrderDone(false);
                  }}
                  className="text-xs uppercase tracking-wider text-white/40"
                >
                  Fechar
                </button>
              </div>

              {orderDone ? (
                <div className="mt-16 text-center">
                  <p className="text-sm font-black uppercase tracking-wider text-[#F5B942]">
                    Pedido enviado
                  </p>
                  <p
                    className="mt-3 text-3xl font-extrabold uppercase"
                    style={{ fontFamily: "var(--font-bl-display)" }}
                  >
                    Já estamos no smash
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCart([]);
                      setOrderDone(false);
                      setCartOpen(false);
                    }}
                    className="mt-8 bg-[#F5B942] px-6 py-3 text-xs font-black uppercase text-black"
                  >
                    Novo pedido
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-8 flex-1 space-y-4 overflow-y-auto">
                    {cart.length === 0 && (
                      <p className="text-sm text-white/40">Sacola vazia.</p>
                    )}
                    {cart.map((item) => {
                      const extraSum = item.extras.reduce((s, id) => {
                        const ex = extras.find((e) => e.id === id);
                        return s + (ex?.price ?? 0);
                      }, 0);
                      return (
                        <div
                          key={item.key}
                          className="border border-white/10 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-bold uppercase">{item.name}</p>
                              {item.extras.length > 0 && (
                                <p className="mt-1 text-xs text-white/40">
                                  +{" "}
                                  {item.extras
                                    .map(
                                      (id) =>
                                        extras.find((e) => e.id === id)?.name,
                                    )
                                    .join(", ")}
                                </p>
                              )}
                            </div>
                            <p className="font-bold text-[#F5B942]">
                              R${(item.basePrice + extraSum) * item.qty}
                            </p>
                          </div>
                          <div className="mt-3 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => changeQty(item.key, -1)}
                              className="h-8 w-8 border border-white/20"
                            >
                              −
                            </button>
                            <span>{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => changeQty(item.key, 1)}
                              className="h-8 w-8 border border-white/20"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-sm">
                      <span>Total</span>
                      <span
                        className="text-2xl font-extrabold text-[#F5B942]"
                        style={{ fontFamily: "var(--font-bl-display)" }}
                      >
                        R${cartTotal}
                      </span>
                    </div>
                    <button
                      type="button"
                      disabled={cart.length === 0}
                      onClick={() => setOrderDone(true)}
                      className="mt-4 w-full bg-[#F5B942] py-3.5 text-xs font-black uppercase tracking-wider text-black disabled:opacity-40"
                    >
                      Finalizar pedido
                    </button>
                  </div>
                </>
              )}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
