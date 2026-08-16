"use client";

import { FormEvent, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/data/contact";

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

  useEffect(() => {
    if (!open) return;

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Por enquanto só fecha — sem envio.
    onClose();
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

              <p className="text-xs leading-5 text-zinc-600">
                Por enquanto o envio automático ainda não está ativo. Em breve
                essas respostas vão direto para {contact.email}.
              </p>

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
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
