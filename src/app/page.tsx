import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { LaunchBanner } from "@/components/hero/LaunchBanner";
import dynamic from "next/dynamic";

// Dynamically import sections below the fold to reduce initial JS bundle size
const About = dynamic(() => import("@/components/about/About").then((mod) => mod.About), { ssr: true });
const Features = dynamic(() => import("@/components/features/Features").then((mod) => mod.Features), { ssr: true });
const Payments = dynamic(() => import("@/components/payments/Payments").then((mod) => mod.Payments), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/how-it-works/HowItWorks").then((mod) => mod.HowItWorks), { ssr: true });
const Contact = dynamic(() => import("@/components/contact/Contact").then((mod) => mod.Contact), { ssr: true });
const Footer = dynamic(() => import("@/components/footer/Footer").then((mod) => mod.Footer), { ssr: true });

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
