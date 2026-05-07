import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { LaunchBanner } from "@/components/hero/LaunchBanner";
import { About } from "@/components/about/About";
import { Features } from "@/components/features/Features";
import { Payments } from "@/components/payments/Payments";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05010F]">
      <Navbar />
      <Hero />
      <LaunchBanner />
      <About />
      <Features />
      <Payments />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
