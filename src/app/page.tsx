import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { LaunchBanner } from "@/components/hero/LaunchBanner";
import { About } from "@/components/about/About";
import { Features } from "@/components/features/Features";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05010F] overflow-x-hidden selection:bg-[#7B2CFF] selection:text-white">
      <Navbar />
      <Hero />
      <LaunchBanner />
      <About />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
