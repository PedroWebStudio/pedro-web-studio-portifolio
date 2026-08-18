import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-6 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-white">
          PEDRO WEB STUDIO<span className="text-[#D4AF37]">.</span>
        </Link>

        <p>© {new Date().getFullYear()} Pedro Web Studio · Sites institucionais</p>

        <Link
          href="/contato"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#D4AF37]"
        >
          Vamos conversar
          <ArrowRight />
        </Link>
      </div>
    </footer>
  );
}
