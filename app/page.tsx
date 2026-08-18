import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Responsive from "@/components/Responsive";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <HowItWorks />
      <Responsive />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
