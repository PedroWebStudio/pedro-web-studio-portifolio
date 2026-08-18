"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContactEmailModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-zinc-800 bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#D4AF37]";

export default function ContactEmailModal({
  open,
  onClose,
}: ContactEmailModalProps) {
  const titleId = useId();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!open) {
      setSent(false);
      setSending(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const formData = new FormData(event.currentTarget);

    const business = formData.get("business")?.toString() ?? "";
    const goal = formData.get("goal")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";

    try {
      setSending(true);

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          business,
          goal,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar.");
      }

      setSent(true);
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      alert("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
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
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 bg-[#0C0C0E] shadow-2xl"
          >
            {sent ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-[#D4AF37]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>

                <h2
                  id={titleId}
                  className="mb-3 text-2xl font-semibold tracking-tight"
                >
                  Mensagem enviada!
                </h2>
                <p className="text-sm leading-6 text-zinc-400">
                  Recebemos sua mensagem. Logo entraremos em contato.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between border-b border-zinc-800 px-6 py-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                      E-mail
                    </p>
                    <h2
                      id={titleId}
                      className="mt-2 text-xl font-semibold tracking-tight"
                    >
                      Conte um pouco da ideia
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white"
                  >
                    Fechar
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
                  <label className="block text-left">
                    <span className="text-sm font-medium text-zinc-300">
                      1. Qual é o seu negócio?
                    </span>
                    <textarea
                      required
                      name="business"
                      rows={2}
                      placeholder="Ex.: clínica, escritório, comércio, startup..."
                      className={`${fieldClassName} resize-y`}
                    />
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-medium text-zinc-300">
                      2. O que você precisa no site?
                    </span>
                    <textarea
                      required
                      name="goal"
                      rows={2}
                      placeholder="Ex.: site institucional, mostrar serviços, gerar contatos..."
                      className={`${fieldClassName} resize-y`}
                    />
                  </label>

                  <label className="block text-left">
                    <span className="text-sm font-medium text-zinc-300">
                      3. Qual o seu telefone?
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(11) 98954-5870"
                      className={fieldClassName}
                    />
                  </label>

                  <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-5 text-sm transition hover:border-zinc-500"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? "Enviando..." : "Enviar"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
