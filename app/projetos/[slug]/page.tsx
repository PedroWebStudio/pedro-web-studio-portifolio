import Link from "next/link";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Projeto não encontrado.</h1>

          <Link
            href="/"
            className="mt-6 inline-flex items-center text-[#D4AF37] hover:underline"
          >
            Voltar para o portfólio
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  const { caseStudy } = project;

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          PEDRO<span className="text-[#D4AF37]">.</span>
        </Link>

        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft />
          Voltar para projetos
        </Link>
      </header>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-12 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
            {project.category}
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            {caseStudy.headline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/demonstracoes/${slug}`}
              className="inline-flex items-center gap-2 bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Visitar demonstração
              <ArrowUpRight />
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Quero um projeto assim
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-28">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              Visão geral
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              O que esse site precisa comunicar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400">
            {caseStudy.overview}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#0C0C0E]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              Desafio
            </span>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              Solução
            </span>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-28">
          <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
            Destaques
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            O que diferencia essa experiência.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
            {caseStudy.highlights.map((item, index) => (
              <div key={item} className="bg-[#09090B] p-7 sm:p-8">
                <span className="text-xs font-medium text-[#D4AF37]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#0C0C0E]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-28">
          <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
            Abordagem
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Como o projeto foi pensado.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {caseStudy.approach.map((item) => (
              <div key={item.title} className="border-t border-zinc-800 pt-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10 lg:px-8 lg:py-28">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              Resultado
            </span>
            <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {caseStudy.result}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={`/demonstracoes/${slug}`}
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Ver demonstração
              <ArrowUpRight />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Falar sobre um projeto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
