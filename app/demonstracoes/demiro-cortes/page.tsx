"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-demiro-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-demiro-sans",
});

const yellow = "#FFD400";
const black = "#0A0A0A";

const ADDRESS = "Rua Augusta, 1500 — Consolação, São Paulo — SP";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Rua+Augusta+1500+S%C3%A3o+Paulo&hl=pt-BR&z=16&output=embed";
const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Rua+Augusta,+1500,+S%C3%A3o+Paulo,+SP";

const services = [
  { id: "corte", name: "Corte", duration: "40 min", price: 55 },
  { id: "barba", name: "Barba", duration: "30 min", price: 40 },
  { id: "combo", name: "Corte + Barba", duration: "70 min", price: 85 },
  { id: "kids", name: "Kids", duration: "30 min", price: 45 },
];

const hours = [
  { day: "Seg — Sex", time: "10h — 20h" },
  { day: "Sábado", time: "09h — 18h" },
  { day: "Domingo", time: "Fechado" },
];

const slots = ["10:00", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30"];

function nextDays(count: number) {
  const days: { key: string; label: string; sub: string }[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const label = d.toLocaleDateString("pt-BR", { weekday: "short" });
    const sub = d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    });
    days.push({ key, label, sub });
  }
  return days;
}

export default function DemiroCortes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [dayKey, setDayKey] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState<string | null>(null);

  const days = useMemo(() => nextDays(7), []);
  const service = services.find((s) => s.id === serviceId) ?? null;

  function resetBooking() {
    setStep(0);
    setServiceId(null);
    setDayKey(null);
    setTime(null);
    setName("");
    setPhone("");
    setCode(null);
  }

  function handleConfirm(event: FormEvent) {
    event.preventDefault();
    if (!service || !dayKey || !time || !name || !phone) return;
    const ticket = `DM-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    setCode(ticket);
    setStep(4);
  }

  const dayLabel =
    days.find((d) => d.key === dayKey)?.sub ?? dayKey ?? "";

  return (
    <main
      className={`${display.variable} ${sans.variable} min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white`}
      style={{ fontFamily: "var(--font-demiro-sans)" }}
    >
      <style>{`
        @keyframes demiro-pole {
          0% { background-position: 0 0; }
          100% { background-position: 0 56px; }
        }
        @keyframes demiro-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .demiro-pole {
          background-image: repeating-linear-gradient(
            -45deg,
            #ffd400 0 14px,
            #0a0a0a 14px 28px,
            #ffffff 28px 42px,
            #0a0a0a 42px 56px
          );
          background-size: 56px 56px;
          animation: demiro-pole 1.1s linear infinite;
        }
        .demiro-marquee {
          animation: demiro-marquee 22s linear infinite;
        }
      `}</style>

      {/* DEMO BAR */}
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-white/45 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#FFD400]">Pedro Web Studio</span>
        </div>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#FFD400] px-4 py-2 text-xs font-bold text-black transition hover:bg-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="demiro-pole h-9 w-3 rounded-full" aria-hidden />
            <span
              className="text-xl tracking-wide text-[#FFD400] sm:text-2xl"
              style={{ fontFamily: "var(--font-demiro-display)" }}
            >
              DEMIRO CORTES
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45 md:flex">
            {[
              ["#servicos", "Serviços"],
              ["#agenda", "Agendar"],
              ["#chegar", "Como chegar"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-[#FFD400]">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#agenda"
            className="hidden bg-[#FFD400] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white md:inline-flex"
          >
            Agendar corte
          </a>

          <button
            type="button"
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-[#FFD400]" />
            <span className="block h-0.5 w-6 bg-[#FFD400]" />
            <span className="block h-0.5 w-6 bg-[#FFD400]" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-black md:hidden"
            >
              <div className="flex flex-col px-6 py-3">
                {[
                  ["#servicos", "Serviços"],
                  ["#agenda", "Agendar"],
                  ["#chegar", "Como chegar"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm uppercase tracking-wider text-white/70"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO — diagonal slash, not side-by-side */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `linear-gradient(115deg, ${black} 0%, ${black} 52%, ${yellow} 52%, ${yellow} 100%)`,
          }}
        />
        <div className="pointer-events-none absolute -right-10 top-10 hidden h-40 w-8 demiro-pole opacity-80 lg:block" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#FFD400]">
              Barbearia · São Paulo
            </p>
            <h1
              className="mt-4 max-w-xl text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-demiro-display)" }}
            >
              CORTE
              <br />
              COM
              <br />
              <span className="text-[#FFD400]">ATITUDE.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Fades precisos, barba alinhada e horário marcado sem enrolação.
              Escolhe o serviço, o dia e aparece.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#agenda"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFD400] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black"
              >
                Agendar agora
              </motion.a>
              <a
                href="#chegar"
                className="border border-white/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#FFD400] hover:text-[#FFD400]"
              >
                Como chegar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative lg:justify-self-end"
          >
            <div className="border-4 border-black bg-black p-6 text-white shadow-[12px_12px_0_0_#0A0A0A] lg:w-[280px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD400]">
                Aberto agora
              </p>
              <p
                className="mt-3 text-4xl text-[#FFD400]"
                style={{ fontFamily: "var(--font-demiro-display)" }}
              >
                10h–20h
              </p>
              <p className="mt-2 text-sm text-white/55">Segunda a sexta</p>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-white/50">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-white/80">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y-4 border-black bg-[#FFD400] py-3 text-black">
        <div className="demiro-marquee flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.25em]">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex gap-10">
              {[
                "Fade",
                "Navalha",
                "Barba",
                "Kids",
                "Hot towel",
                "Agende online",
                "Walk-in limitado",
              ].map((item) => (
                <span key={`${loop}-${item}`} className="flex items-center gap-10">
                  {item}
                  <span aria-hidden>●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-[#0A0A0A] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFD400]">
                Serviços
              </p>
              <h2
                className="mt-3 text-4xl text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-demiro-display)" }}
              >
                O MENU DO CORTE
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              Sem surpresa no caixa. Escolhe, agenda e chega no horário.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ x: 6 }}
                onClick={() => {
                  setServiceId(item.id);
                  setStep(1);
                  document.getElementById("agenda")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group flex items-center justify-between border border-white/10 bg-[#111] px-6 py-6 text-left transition hover:border-[#FFD400] hover:bg-[#FFD400]"
              >
                <div>
                  <p
                    className="text-2xl text-white transition group-hover:text-black sm:text-3xl"
                    style={{ fontFamily: "var(--font-demiro-display)" }}
                  >
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-black/55">
                    {item.duration}
                  </p>
                </div>
                <p
                  className="text-3xl text-[#FFD400] transition group-hover:text-black"
                  style={{ fontFamily: "var(--font-demiro-display)" }}
                >
                  R${item.price}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section id="agenda" className="border-t border-white/10 bg-[#111] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFD400]">
              Agendamento
            </p>
            <h2
              className="mt-3 text-4xl text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-demiro-display)" }}
            >
              MARCA TEU HORÁRIO
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50">
              Fluxo simples em 4 passos. Confirmação na hora — demonstração local,
              sem backend.
            </p>
          </div>

          {/* steps */}
          <div className="mt-10 flex flex-wrap gap-2">
            {["Serviço", "Dia", "Horário", "Dados", "Pronto"].map((label, i) => (
              <div
                key={label}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                  step === i
                    ? "bg-[#FFD400] text-black"
                    : step > i
                      ? "bg-white/15 text-white"
                      : "bg-white/5 text-white/30"
                }`}
              >
                {i + 1}. {label}
              </div>
            ))}
          </div>

          <div className="mt-8 min-h-[320px] border border-white/10 bg-black p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="s0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {services.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setServiceId(item.id);
                        setStep(1);
                      }}
                      className={`border px-5 py-5 text-left transition ${
                        serviceId === item.id
                          ? "border-[#FFD400] bg-[#FFD400]/10"
                          : "border-white/10 hover:border-[#FFD400]/60"
                      }`}
                    >
                      <p
                        className="text-xl"
                        style={{ fontFamily: "var(--font-demiro-display)" }}
                      >
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-white/45">
                        {item.duration} · R$ {item.price}
                      </p>
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    Próximos 7 dias
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                    {days.map((d) => (
                      <button
                        key={d.key}
                        type="button"
                        onClick={() => {
                          setDayKey(d.key);
                          setStep(2);
                        }}
                        className={`border px-3 py-4 text-center transition ${
                          dayKey === d.key
                            ? "border-[#FFD400] bg-[#FFD400] text-black"
                            : "border-white/10 hover:border-[#FFD400]"
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-wider opacity-70">
                          {d.label}
                        </p>
                        <p
                          className="mt-1 text-lg"
                          style={{ fontFamily: "var(--font-demiro-display)" }}
                        >
                          {d.sub}
                        </p>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#FFD400]"
                  >
                    ← Voltar
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    Horários livres
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {slots.map((slot) => (
                      <motion.button
                        key={slot}
                        type="button"
                        whileTap={{ scale: 0.94 }}
                        onClick={() => {
                          setTime(slot);
                          setStep(3);
                        }}
                        className={`min-w-[88px] border px-4 py-3 text-sm font-bold transition ${
                          time === slot
                            ? "border-[#FFD400] bg-[#FFD400] text-black"
                            : "border-white/10 hover:border-[#FFD400] hover:text-[#FFD400]"
                        }`}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#FFD400]"
                  >
                    ← Voltar
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.form
                  key="s3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  onSubmit={handleConfirm}
                  className="mx-auto max-w-md space-y-4"
                >
                  <div className="border border-[#FFD400]/30 bg-[#FFD400]/5 px-4 py-3 text-xs text-white/70">
                    {service?.name} · {dayLabel} · {time} · R$ {service?.price}
                  </div>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                      Nome
                    </span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#FFD400]"
                      placeholder="Seu nome"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                      WhatsApp
                    </span>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#FFD400]"
                      placeholder="(11) 99999-9999"
                    />
                  </label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="bg-[#FFD400] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
                    >
                      Confirmar horário
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 4 && code && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="mx-auto max-w-md border-4 border-[#FFD400] bg-[#FFD400] p-6 text-black"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    Agendamento confirmado
                  </p>
                  <p
                    className="mt-3 text-4xl"
                    style={{ fontFamily: "var(--font-demiro-display)" }}
                  >
                    {code}
                  </p>
                  <div className="mt-5 space-y-1 text-sm">
                    <p>
                      <strong>{name}</strong> · {phone}
                    </p>
                    <p>
                      {service?.name} · {dayLabel} · {time}
                    </p>
                    <p>Valor: R$ {service?.price}</p>
                  </div>
                  <p className="mt-4 text-xs text-black/60">
                    Guarda esse código. Chega 5 min antes.
                  </p>
                  <button
                    type="button"
                    onClick={resetBooking}
                    className="mt-6 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD400]"
                  >
                    Novo agendamento
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section id="chegar" className="bg-[#0A0A0A] py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFD400]">
              Localização
            </p>
            <h2
              className="mt-3 text-4xl text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-demiro-display)" }}
            >
              COMO CHEGAR
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55">{ADDRESS}</p>
            <p className="mt-3 text-sm text-white/40">
              Metrô Consolação · Estacionamento na região
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD400] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                Abrir no Google Maps
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#FFD400] hover:text-[#FFD400]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden border-4 border-[#FFD400] bg-[#111]"
          >
            <iframe
              title="Mapa Demiro Cortes"
              src={MAPS_EMBED}
              className="h-[320px] w-full grayscale contrast-125 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <span className="demiro-pole h-8 w-2.5 rounded-full" aria-hidden />
            <div>
              <p
                className="text-lg text-[#FFD400]"
                style={{ fontFamily: "var(--font-demiro-display)" }}
              >
                DEMIRO CORTES
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                Barbearia
              </p>
            </div>
          </div>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Demiro Cortes — Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
