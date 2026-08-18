"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { contact, getWhatsAppUrl } from "@/data/contact";
import ContactEmailModal from "@/components/ContactEmailModal";
import { ArrowLeft, ArrowRight } from "@/components/icons";

export default function ContatoPage() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink-0 text-lg font-semibold tracking-tight">
          PEDRO<span className="text-[#D4AF37]">.</span>
        </Link>

        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="sm:hidden">Voltar</span>
          <span className="hidden sm:inline">Voltar ao início</span>
        </Link>
      </header>

      <section className="mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-6 pb-16 pt-8 sm:min-h-[calc(100vh-88px)] sm:pb-24 sm:pt-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full min-w-0 max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Contato
            </span>
            <span className="h-px w-8 shrink-0 bg-[#D4AF37]" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tem um projeto em mente?
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Vamos transformar sua ideia em uma experiência digital.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-black transition hover:bg-white sm:w-auto"
            >
              WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>

            <motion.button
              type="button"
              onClick={() => setEmailModalOpen(true)}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-full border border-zinc-700 px-8 text-sm font-medium text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:w-auto"
            >
              E-mail
            </motion.button>
          </div>

          {/* Card orçamento */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <div className="flex flex-col items-stretch gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="min-w-0 text-center sm:text-left">
                <p className="text-base font-semibold text-white">Prefere detalhar seu projeto?</p>
                <p className="mt-1 text-sm text-zinc-500">Preencha o formulário e receba uma proposta personalizada.</p>
              </div>
              <Link
                href="/orcamento"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-7 text-sm font-semibold text-black transition hover:bg-white sm:w-auto sm:shrink-0"
              >
                Comece seu projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <p className="mt-8 break-all text-sm text-zinc-600">{contact.email}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-14 grid w-full min-w-0 max-w-3xl gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:mt-20 sm:grid-cols-3"
        >
          {[
            {
              title: "Resposta rápida",
              text: "Retorno em até 24 horas úteis.",
            },
            {
              title: "Conversa direta",
              text: "WhatsApp agora. E-mail com a ideia em poucos passos.",
            },
            {
              title: "Proposta clara",
              text: "Escopo, prazo e próximos passos alinhados.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#0C0C0E] p-7 text-left">
              <h2 className="text-sm font-semibold text-[#D4AF37]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <ContactEmailModal
        open={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </main>
  );
}
