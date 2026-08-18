"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/components/icons";

// ─── tipos ────────────────────────────────────────────────────────────────────
type FormData = {
  tipo: string;
  funcionalidades: string[];
  identidade: string;
  nome: string;
  empresa: string;
  segmento: string;
  instagram: string;
  descricao: string;
  prazo: string;
  investimento: string;
  nomeContato: string;
  email: string;
  whatsapp: string;
};

const EMPTY: FormData = {
  tipo: "",
  funcionalidades: [],
  identidade: "",
  nome: "",
  empresa: "",
  segmento: "",
  instagram: "",
  descricao: "",
  prazo: "",
  investimento: "",
  nomeContato: "",
  email: "",
  whatsapp: "",
};

// ─── opções ───────────────────────────────────────────────────────────────────
const TIPOS = ["Site institucional", "Landing Page", "Loja virtual", "Sistema / aplicação", "Outro"];

const FUNCIONALIDADES = [
  "Página inicial", "Sobre", "Serviços", "Portfólio", "Blog",
  "Formulário", "WhatsApp", "Login", "Painel administrativo", "Integrações", "Outros",
];

const IDENTIDADES = [
  "Já tenho identidade completa",
  "Tenho apenas uma logo",
  "Não tenho identidade",
  "Quero algo novo",
];

const INVESTIMENTOS = ["Até R$ 1.500", "R$ 1.500–3.000", "R$ 3.000–5.000", "Acima de R$ 5.000", "Ainda não sei"];

const TOTAL_STEPS = 6;

// ─── helpers ──────────────────────────────────────────────────────────────────
function OptionButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
        selected
          ? "border-[#D4AF37] bg-[#D4AF37]/10 text-white"
          : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</label>
      <input
        {...props}
        className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20"
      />
    </div>
  );
}

function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/20 resize-none"
      />
    </div>
  );
}

// ─── componente principal ─────────────────────────────────────────────────────
export default function OrcamentoPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [dir, setDir] = useState(1); // 1 = avançar, -1 = voltar

  function go(next: number) {
    setDir(next > step ? 1 : -1);
    setStep(next);
  }

  function toggleFunc(f: string) {
    setForm((p) => ({
      ...p,
      funcionalidades: p.funcionalidades.includes(f)
        ? p.funcionalidades.filter((x) => x !== f)
        : [...p.funcionalidades, f],
    }));
  }

  function canAdvance() {
    if (step === 1) return !!form.tipo;
    if (step === 2) return form.funcionalidades.length > 0;
    if (step === 3) return !!form.identidade;
    if (step === 4) return !!form.nome && !!form.descricao;
    if (step === 5) return !!form.investimento;
    if (step === 6) return !!form.nomeContato && !!form.email && !!form.whatsapp;
    return true;
  }

  async function handleSubmit() {
    if (sending || !canAdvance()) return;

    try {
      setSending(true);

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "orcamento",
          ...form,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar.");
      }

      setDone(true);
    } catch (error) {
      console.error("Erro ao enviar orçamento:", error);
      alert("Não foi possível enviar sua solicitação. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  function closeDone() {
    setDone(false);
  }

  useEffect(() => {
    if (!done) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDone();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [done]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          PEDRO WEB STUDIO<span className="text-[#D4AF37]">.</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white">
          <ArrowLeft />
          Voltar ao início
        </Link>
      </header>

      <div className="mx-auto w-full max-w-2xl px-6 pb-24 pt-8 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Orçamento
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Comece seu projeto
          </h1>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-10 flex items-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className="relative h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[#D4AF37]"
                initial={false}
                animate={{ width: i < step ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* ── Step 1 ── */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">01 —</span> Tipo de projeto
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {TIPOS.map((t) => (
                      <OptionButton key={t} selected={form.tipo === t} onClick={() => setForm((p) => ({ ...p, tipo: t }))}>
                        {t}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 2 ── */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">02 —</span> O que você precisa?
                  </h2>
                  <p className="text-sm text-zinc-500">Selecione todas que se aplicam.</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {FUNCIONALIDADES.map((f) => (
                      <OptionButton key={f} selected={form.funcionalidades.includes(f)} onClick={() => toggleFunc(f)}>
                        {form.funcionalidades.includes(f) && (
                          <span className="mr-2 text-[#D4AF37]">✓</span>
                        )}
                        {f}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 3 ── */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">03 —</span> Identidade visual
                  </h2>
                  <div className="grid gap-3">
                    {IDENTIDADES.map((id) => (
                      <OptionButton key={id} selected={form.identidade === id} onClick={() => setForm((p) => ({ ...p, identidade: id }))}>
                        {id}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Step 4 ── */}
              {step === 4 && (
                <div className="space-y-5">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">04 —</span> Sobre o seu negócio
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nome" placeholder="Seu nome" value={form.nome} onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))} />
                    <Field label="Empresa" placeholder="Nome da empresa" value={form.empresa} onChange={(e) => setForm((p) => ({ ...p, empresa: e.target.value }))} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Segmento" placeholder="Ex: Advocacia, Construção..." value={form.segmento} onChange={(e) => setForm((p) => ({ ...p, segmento: e.target.value }))} />
                    <Field label="Instagram / Site atual" placeholder="@perfil ou https://..." value={form.instagram} onChange={(e) => setForm((p) => ({ ...p, instagram: e.target.value }))} />
                  </div>
                  <Textarea label="Descrição do projeto" placeholder="Conte um pouco sobre o que você precisa..." value={form.descricao} onChange={(e) => setForm((p) => ({ ...p, descricao: e.target.value }))} />
                </div>
              )}

              {/* ── Step 5 ── */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">05 —</span> Prazo e investimento
                  </h2>
                  <Field label="Quando pretende lançar?" placeholder="Ex: Em 1 mês, sem pressa..." value={form.prazo} onChange={(e) => setForm((p) => ({ ...p, prazo: e.target.value }))} />
                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">Faixa de investimento</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {INVESTIMENTOS.map((inv) => (
                        <OptionButton key={inv} selected={form.investimento === inv} onClick={() => setForm((p) => ({ ...p, investimento: inv }))}>
                          {inv}
                        </OptionButton>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 6 ── */}
              {step === 6 && (
                <div className="space-y-5">
                  <h2 className="mb-6 text-lg font-semibold">
                    <span className="mr-2 text-zinc-600">06 —</span> Seus dados
                  </h2>
                  <Field label="Nome" placeholder="Como posso te chamar?" value={form.nomeContato} onChange={(e) => setForm((p) => ({ ...p, nomeContato: e.target.value }))} />
                  <Field label="E-mail" type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
                  <Field label="WhatsApp" type="tel" placeholder="(00) 00000-0000" value={form.whatsapp} onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))} />

                  {/* Resumo */}
                  <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 text-sm text-zinc-400 space-y-1.5">
                    <p><span className="text-zinc-600">Tipo:</span> {form.tipo}</p>
                    <p><span className="text-zinc-600">Funcionalidades:</span> {form.funcionalidades.join(", ")}</p>
                    <p><span className="text-zinc-600">Identidade:</span> {form.identidade}</p>
                    <p><span className="text-zinc-600">Investimento:</span> {form.investimento}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegação */}
        <div className="mt-10 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => go(step - 1)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Voltar
            </button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <motion.button
              type="button"
              onClick={() => go(step + 1)}
              disabled={!canAdvance()}
              whileHover={canAdvance() ? { scale: 1.04 } : {}}
              whileTap={canAdvance() ? { scale: 0.97 } : {}}
              className={`inline-flex h-11 items-center justify-center rounded-full px-8 text-sm font-semibold transition-all ${
                canAdvance()
                  ? "bg-[#D4AF37] text-black"
                  : "cursor-not-allowed bg-zinc-800 text-zinc-600"
              }`}
            >
              Continuar
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={!canAdvance() || sending}
              whileHover={canAdvance() && !sending ? { scale: 1.04 } : {}}
              whileTap={canAdvance() && !sending ? { scale: 0.97 } : {}}
              className={`inline-flex h-11 items-center justify-center rounded-full px-8 text-sm font-semibold transition-all ${
                canAdvance() && !sending
                  ? "bg-[#D4AF37] text-black"
                  : "cursor-not-allowed bg-zinc-800 text-zinc-600"
              }`}
            >
              {sending ? "Enviando..." : "Enviar solicitação"}
              {!sending && <ArrowRight className="ml-1.5 h-4 w-4" />}
            </motion.button>
          )}
        </div>

        {/* Step counter */}
        <p className="mt-6 text-center text-xs text-zinc-700">
          {step} de {TOTAL_STEPS}
        </p>
      </div>

      <AnimatePresence>
        {done && (
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
              onClick={closeDone}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="orcamento-sucesso-titulo"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-[#0C0C0E] px-6 py-10 text-center shadow-2xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-[#D4AF37]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>

              <h2
                id="orcamento-sucesso-titulo"
                className="mb-3 text-2xl font-semibold tracking-tight"
              >
                Recebemos seu projeto!
              </h2>
              <p className="text-sm leading-6 text-zinc-400">
                Vou analisar as informações e entrar em contato para conversarmos sobre os próximos passos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={closeDone}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  Fechar
                </button>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Voltar ao início
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
