"use client";

import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const properties = [
  {
    type: "Apartamento",
    title: "Apartamento Jardins",
    location: "Jardins · São Paulo",
    price: "R$ 1.850.000",
    details: "3 quartos · 2 suítes · 142 m²",
    number: "01",
  },
  {
    type: "Casa",
    title: "Casa Alto da Boa Vista",
    location: "Alto da Boa Vista · São Paulo",
    price: "R$ 2.490.000",
    details: "4 quartos · 3 suítes · 280 m²",
    number: "02",
  },
  {
    type: "Cobertura",
    title: "Cobertura Vila Madalena",
    location: "Vila Madalena · São Paulo",
    price: "R$ 3.200.000",
    details: "4 quartos · 4 suítes · 315 m²",
    number: "03",
  },
];

const categories = [
  {
    title: "Apartamentos",
    text: "Espaços urbanos para viver com conforto e praticidade.",
    number: "01",
  },
  {
    title: "Casas",
    text: "Imóveis que unem espaço, privacidade e personalidade.",
    number: "02",
  },
  {
    title: "Coberturas",
    text: "Experiências exclusivas nos melhores endereços.",
    number: "03",
  },
  {
    title: "Comerciais",
    text: "Endereços estratégicos para seus negócios.",
    number: "04",
  },
];

export default function PrimeImoveis() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${dmSans.variable} min-h-screen bg-[#F7F5F0] text-[#17202A]`}
      style={{ fontFamily: "var(--font-dm-sans)" }}
    >
      {/* DEMONSTRAÇÃO */}

      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#17202A]/10 bg-white/90 p-1.5 shadow-xl backdrop-blur">
        <div className="px-4 py-2 text-xs text-[#17202A]/60">
          Demonstração desenvolvida por{" "}
          <span className="font-semibold text-[#17202A]">
            Pedro Web Studio
          </span>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#17202A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#C6A15B]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Escolher outro projeto
        </Link>
      </div>

      {/* HEADER */}

      <header className="absolute left-0 right-0 top-0 z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">Prime</span>
            <span className="hidden h-5 w-px bg-white/30 sm:block" />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 sm:block">Imóveis</span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider md:flex">
            {["#imoveis", "#experiencia", "#regioes", "#contato"].map((href, i) => (
              <a key={href} href={href} className="transition hover:text-[#C6A15B]">
                {["Imóveis", "A Prime", "Regiões", "Contato"][i]}
              </a>
            ))}
          </nav>

          <a href="#contato" className="hidden border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#17202A] md:block">
            Fale com um consultor
          </a>

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
              className="overflow-hidden border-t border-white/10 bg-[#17202A] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {["#imoveis", "#experiencia", "#regioes", "#contato"].map((href, i) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-sm text-white/70 transition hover:text-[#C6A15B]">
                    {["Imóveis", "A Prime", "Regiões", "Contato"][i]}
                  </a>
                ))}
                <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-3 border border-white/30 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider transition hover:border-[#C6A15B] hover:text-[#C6A15B]">
                  Fale com um consultor
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}

      <section className="relative min-h-[680px] bg-[#17202A] text-white sm:min-h-[780px]">
        {/* composição visual — overflow só aqui, para não cortar a busca */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-15%] h-[650px] w-[650px] rounded-full border border-white/10" />

          <div className="absolute bottom-[-20%] left-[-8%] h-[500px] w-[500px] rounded-full border border-[#C6A15B]/20" />

          <div className="absolute inset-y-0 right-0 w-[48%] bg-[#24313A]" />

          <div className="absolute bottom-0 right-[8%] h-[82%] w-[30%] border-x border-t border-white/10 bg-[#2B3942]" />

          <div className="absolute bottom-[18%] right-[12%] h-px w-[22%] bg-[#C6A15B]/50" />

          <div className="absolute right-[18%] top-[25%] h-32 w-32 border border-[#C6A15B]/40" />

          <div className="absolute right-[22%] top-[29%] h-24 w-24 bg-[#C6A15B]/10" />

          <div className="absolute bottom-20 right-16 font-[family-name:var(--font-playfair)] text-[180px] leading-none text-white/[0.035]">
            P
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 sm:min-h-[780px] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
              Imóveis selecionados
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl leading-[0.98] sm:text-7xl lg:text-[88px]">
              O endereço
              <br />
              certo muda
              <br />
              <span className="italic text-[#C6A15B]">
                tudo.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              Encontramos imóveis que combinam localização, personalidade e
              qualidade de vida para cada momento da sua história.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#imoveis"
                className="bg-[#C6A15B] px-7 py-4 text-sm font-semibold text-[#17202A] transition hover:bg-white"
              >
                Explorar imóveis
              </a>

              <a
                href="#experiencia"
                className="border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:border-[#C6A15B]"
              >
                Conheça a Prime
              </a>
            </div>
          </motion.div>
        </div>

        {/* busca */}

        <div className="absolute bottom-0 left-1/2 z-30 w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 translate-y-1/2">
          <div className="grid border border-[#17202A]/10 bg-white p-3 shadow-2xl md:grid-cols-[1.2fr_1fr_1fr_auto]">
            <div className="border-b border-[#17202A]/10 px-5 py-4 md:border-b-0 md:border-r">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#17202A]/40">
                O que você procura?
              </p>

              <p className="mt-1 text-sm font-medium">
                Comprar um imóvel
              </p>
            </div>

            <div className="border-b border-[#17202A]/10 px-5 py-4 md:border-b-0 md:border-r">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#17202A]/40">
                Localização
              </p>

              <p className="mt-1 text-sm font-medium">
                São Paulo
              </p>
            </div>

            <div className="px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#17202A]/40">
                Tipo de imóvel
              </p>

              <p className="mt-1 text-sm font-medium">
                Todos os imóveis
              </p>
            </div>

            <a
              href="#imoveis"
              className="flex items-center justify-center bg-[#17202A] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#C6A15B] hover:text-[#17202A]"
            >
              Buscar
            </a>
          </div>
        </div>
      </section>

      {/* IMÓVEIS */}

      <section id="imoveis" className="relative z-0 bg-[#F7F5F0] pb-36 pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                Curadoria Prime
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-5xl leading-tight text-[#17202A] sm:text-6xl">
                Imóveis em
                <br />
                destaque.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#17202A]/55">
              Uma seleção de propriedades escolhidas para quem valoriza
              localização, arquitetura e qualidade de vida.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {properties.map((property, index) => (
              <motion.article
                key={property.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-[380px] overflow-hidden bg-[#D8D5CC]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8B4AA] via-[#D8D5CC] to-[#9B978D] transition-transform duration-700 group-hover:scale-105" />

                  <div className="absolute inset-x-8 bottom-0 h-[72%] border border-white/40 bg-[#E4E1D9]/30" />

                  <div className="absolute left-6 top-6">
                    <span className="bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#17202A]">
                      {property.type}
                    </span>
                  </div>

                  <span className="absolute bottom-5 right-6 font-[family-name:var(--font-playfair)] text-6xl text-white/50">
                    {property.number}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-wider text-[#C6A15B]">
                    {property.location}
                  </p>

                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl text-[#17202A]">
                    {property.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#17202A]/45">
                    {property.details}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#17202A]/10 pt-5">
                    <span className="text-sm font-semibold">
                      {property.price}
                    </span>

                    <span className="text-xs font-semibold text-[#C6A15B]">
                      Ver imóvel →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
              Encontre seu estilo
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-5xl leading-tight text-[#17202A] sm:text-6xl">
              Um imóvel para
              <br />
              cada momento.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-[#17202A]/10 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <motion.div
                key={category.number}
                whileHover={{ backgroundColor: "#F7F5F0" }}
                className="group border-b border-[#17202A]/10 p-8 transition-colors lg:border-r"
              >
                <span className="text-xs font-semibold text-[#C6A15B]">
                  {category.number}
                </span>

                <h3 className="mt-20 font-[family-name:var(--font-playfair)] text-3xl text-[#17202A]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#17202A]/50">
                  {category.text}
                </p>

                <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-wider text-[#17202A]/40 transition group-hover:text-[#C6A15B]">
                  Explorar →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}

      <section id="experiencia" className="bg-[#17202A] py-32 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
              A experiência Prime
            </p>

            <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight sm:text-6xl">
              Mais do que
              <br />
              encontrar um
              <br />
              imóvel.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#C6A15B]">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Curadoria
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Selecionamos propriedades pensando em localização, arquitetura,
                potencial e estilo de vida.
              </p>
            </div>

            <div>
              <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#C6A15B]">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Atendimento
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Entendemos o que você procura para tornar a jornada mais
                simples e personalizada.
              </p>
            </div>

            <div>
              <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#C6A15B]">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Negociação
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Acompanhamos cada etapa para proporcionar segurança e
                tranquilidade.
              </p>
            </div>

            <div>
              <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#C6A15B]">
                04
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Pós-venda
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Nossa relação continua depois das chaves serem entregues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGIÕES */}

      <section id="regioes" className="bg-[#F7F5F0] py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                Onde estamos
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl">
                Os melhores
                <br />
                endereços.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#17202A]/50">
              Conheça regiões selecionadas de São Paulo e encontre o endereço
              que combina com seu estilo de vida.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Jardins",
              "Vila Madalena",
              "Itaim Bibi",
              "Alto da Boa Vista",
            ].map((region, index) => (
              <motion.div
                key={region}
                whileHover={{ y: -5 }}
                className="relative h-64 overflow-hidden bg-[#D2CFC6] p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#AAA69B] to-[#DAD7CF]" />

                <div className="absolute bottom-6 left-6">
                  <span className="text-xs text-[#17202A]/40">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl">
                    {region}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section id="contato" className="bg-[#C6A15B] py-32 text-[#17202A]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#17202A]/50">
            Vamos encontrar juntos
          </p>

          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Seu próximo
            <br />
            endereço está aqui.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#17202A]/60">
            Conte para nossa equipe o que você procura e descubra imóveis
            selecionados especialmente para você.
          </p>

          <a
            href="mailto:contato@primeimoveis.com.br"
            className="mt-10 inline-flex bg-[#17202A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#17202A]"
          >
            Falar com um consultor →
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#101820] py-10 text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 text-xs sm:flex-row lg:px-8">
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-lg text-white">
              Prime
            </span>

            <span className="ml-2 text-white/30">
              Imóveis
            </span>
          </div>

          <span>
            © {new Date().getFullYear()} Prime Imóveis · Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </main>
  );
}