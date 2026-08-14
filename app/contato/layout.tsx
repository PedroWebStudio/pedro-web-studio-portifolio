import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Pedro Web Studio",
  description:
    "Tem um projeto em mente? Fale com o Pedro Web Studio por WhatsApp ou e-mail.",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
