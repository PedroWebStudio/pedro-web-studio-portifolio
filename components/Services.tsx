"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    text: "Presença digital clara, rápida e alinhada à identidade do seu negócio.",
  },
  {
    number: "02",
    title: "Design de interface",
    text: "Layouts pensados para transmitir profissionalismo, confiança e diferenciação.",
  },
  {
    number: "03",
    title: "Desenvolvimento sob medida",
    text: "Código moderno com Next.js, performance e estrutura pronta para crescer.",
  },
  {
    number: "04",
    title: "Identidade aplicada",
    text: "Cada projeto recebe tipografia, cor e ritmo próprios — sem template genérico.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="border-t border-zinc-900 bg-[#0C0C0E]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Serviços
            </span>
          </div>

          <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Do conceito ao site no ar.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Um processo direto para criar uma presença digital que represente bem a sua empresa.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0C0C0E] p-8 sm:p-10"
            >
              <span className="text-xs font-medium text-[#D4AF37]">
                {service.number}
              </span>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
