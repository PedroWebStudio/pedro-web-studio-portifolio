"use client";

import { motion, AnimatePresence } from "framer-motion";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-orbit",
});

const features = [
  {
    title: "Realtime metrics",
    text: "Acompanhe conversão, retenção e receita em um painel só.",
  },
  {
    title: "Automations",
    text: "Dispare alertas e workflows quando um KPI sair do eixo.",
  },
  {
    title: "Team workspaces",
    text: "Organize squads, permissões e relatórios por produto.",
  },
  {
    title: "API-first",
    text: "Integre com o stack que você já usa — sem fricção.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "R$ 0",
    detail: "Para validar a ideia",
    features: ["1 workspace", "3 seats", "Dashboards básicos"],
  },
  {
    name: "Growth",
    price: "R$ 149",
    detail: "Para times em escala",
    features: ["Automações", "10 seats", "API + webhooks"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    detail: "Para operações grandes",
    features: ["SSO", "SLA dedicado", "Onboarding"],
  },
];

export default function OrbitSaas() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${jakarta.variable} ${mono.variable} min-h-screen bg-[#09090B] text-zinc-100`}
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      <div className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-zinc-950/90 p-1.5 shadow-lg backdrop-blur">
        <div className="hidden px-4 py-2 text-xs text-zinc-400 sm:block">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-white">Pedro Web Studio</span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#0EA5E9] px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-zinc-950"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9] text-sm font-bold text-white">O</span>
            <span className="text-lg font-semibold tracking-tight">Orbit</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {["#produto", "#features", "#pricing"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-white">
                {["Produto", "Features", "Pricing"][i]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">Login</a>
            <a href="#cta" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-[#0EA5E9] hover:text-white">Start free</a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-white origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-white" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-white origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/5 bg-[#09090B] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#produto", "#features", "#pricing"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm text-zinc-400 transition hover:text-white">
                    {["Produto", "Features", "Pricing"][i]}
                  </a>
                ))}
                <a href="#cta" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-white px-4 py-3 text-center text-xs font-semibold text-zinc-950 transition hover:bg-[#0EA5E9] hover:text-white">
                  Start free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#0EA5E9]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 text-center lg:px-8 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300"
              style={{ fontFamily: "var(--font-mono-orbit)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
              v2.4 — now with automations
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Analytics que sua
              <br />
              startup{" "}
              <span className="text-[#0EA5E9]">realmente usa.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Orbit centraliza métricas, alertas e relatórios para times de
              produto que precisam decidir rápido — sem planilha infinita.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#cta"
                className="rounded-full bg-[#0EA5E9] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Start free trial
              </a>
              <a
                href="#produto"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-white/30"
              >
                Ver produto
              </a>
            </div>
          </motion.div>

          <motion.div
            id="produto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span
                className="ml-3 text-[11px] text-zinc-500"
                style={{ fontFamily: "var(--font-mono-orbit)" }}
              >
                app.orbit.so/dashboard
              </span>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-[200px_1fr] sm:p-6">
              <div className="hidden space-y-2 rounded-xl bg-white/[0.03] p-4 sm:block">
                {["Overview", "Funnels", "Revenue", "Alerts", "Settings"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-left text-xs ${
                        i === 0
                          ? "bg-[#0EA5E9]/15 text-[#0EA5E9]"
                          : "text-zinc-500"
                      }`}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>

              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "MRR", value: "R$ 48.2k", delta: "+12%" },
                    { label: "Active users", value: "12.4k", delta: "+8%" },
                    { label: "Churn", value: "2.1%", delta: "-0.4%" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left"
                    >
                      <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                        {kpi.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold">{kpi.value}</p>
                      <p
                        className="mt-1 text-xs text-[#0EA5E9]"
                        style={{ fontFamily: "var(--font-mono-orbit)" }}
                      >
                        {kpi.delta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium">Weekly activation</p>
                    <p
                      className="text-[11px] text-zinc-500"
                      style={{ fontFamily: "var(--font-mono-orbit)" }}
                    >
                      last 7 days
                    </p>
                  </div>
                  <div className="flex h-28 items-end gap-2">
                    {[40, 55, 48, 70, 62, 84, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-[#0EA5E9]/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-t border-white/5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.25em] text-[#0EA5E9]"
              style={{ fontFamily: "var(--font-mono-orbit)" }}
            >
              Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tudo que o time precisa
              <br />
              para decidir rápido.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-zinc-950/60 p-7"
              >
                <p
                  className="text-xs text-[#0EA5E9]"
                  style={{ fontFamily: "var(--font-mono-orbit)" }}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/5 bg-zinc-950 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <p
              className="text-xs font-medium uppercase tracking-[0.25em] text-[#0EA5E9]"
              style={{ fontFamily: "var(--font-mono-orbit)" }}
            >
              Pricing
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Simples. Transparente.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 ${
                  plan.highlight
                    ? "border-[#0EA5E9]/50 bg-[#0EA5E9]/10"
                    : "border-white/10 bg-[#09090B]"
                }`}
              >
                <p className="text-sm font-medium text-zinc-400">{plan.name}</p>
                <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
                <p className="mt-2 text-sm text-zinc-500">{plan.detail}</p>
                <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-[#0EA5E9] text-white hover:bg-sky-400"
                      : "border border-white/15 text-white hover:border-white/30"
                  }`}
                >
                  Escolher plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Pronto para orbitar
            <br />
            seus dados?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-400">
            14 dias grátis. Sem cartão. Cancele quando quiser.
          </p>
          <a
            href="mailto:hello@orbit.so"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-[#0EA5E9] hover:text-white"
          >
            Criar conta grátis →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-zinc-500">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-xs sm:flex-row lg:px-8">
          <span className="font-semibold text-zinc-300">Orbit</span>
          <span>© 2026 Orbit Analytics · Built for startups</span>
        </div>
      </footer>
    </main>
  );
}
