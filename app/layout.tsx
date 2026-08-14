import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Web Studio | Sites Institucionais",
  description:
    "Criação de sites institucionais modernos, rápidos e personalizados para empresas que querem fortalecer sua presença digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <PageTransition>{children}</PageTransition>
        <ScrollToTop />
      </body>
    </html>
  );
}