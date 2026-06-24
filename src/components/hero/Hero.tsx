"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Wine, CreditCard, Download } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const features = [
  { icon: Calendar, title: "DISCOVER", desc: "Top events & experiences" },
  { icon: Users, title: "CONNECT", desc: "Meet like-minded people" },
  { icon: Wine, title: "EXCLUSIVE", desc: "Offers & curated experiences" },
  { icon: CreditCard, title: "CONVENIENT", desc: "Easy payments & more" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden flex items-center transform-gpu">
      {/* Background Elements - optimized by replacing CSS blur with radial gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(123,44,255,0.15)_0%,rgba(123,44,255,0)_70%)] mix-blend-screen transform-gpu" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,46,166,0.1)_0%,rgba(255,46,166,0)_70%)] mix-blend-screen transform-gpu" />
        <div className="absolute inset-0 bg-[url('/Social%20monkey_page-0001.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010F]/80 via-[#05010F]/90 to-[#05010F]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-8 lg:mt-0">
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="text-xl">✨</span>
              <span className="gold-gradient font-semibold tracking-wider text-xs sm:text-sm uppercase">
                Swing into the Nightlife!
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-black leading-[1.1] tracking-tighter uppercase w-full">
              <span className="block text-white">SOCIAL MONKEY</span>
              <span className="block gold-gradient">COMING SOON</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-md lg:max-w-xl mx-auto lg:mx-0">
              Your all-in-one app to discover experiences, connect with great people, and make every night unforgettable.
            </p>
          </motion.div>

          {/* Features Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-4 w-full"
          >
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 text-center lg:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#7B2CFF]/50 bg-[#7B2CFF]/10 flex items-center justify-center text-[#7B2CFF] shadow-[0_0_15px_rgba(123,44,255,0.2)]">
                  <item.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="gold-gradient font-bold text-[10px] sm:text-xs uppercase whitespace-nowrap">{item.title}</h3>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-1 leading-tight hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Download Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-8 w-full max-w-xs mx-auto lg:mx-0"
          >
            <a 
              href="/apk/app-release.apk" 
              download="app-release.apk"
              className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#FFBF36] to-[#FFAA00] rounded-full shadow-[0_0_20px_rgba(255,191,54,0.3)] hover:shadow-[0_0_30px_rgba(255,191,54,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group relative overflow-hidden text-center cursor-pointer"
            >
              <Download className="text-[#05010F] shrink-0 group-hover:translate-y-0.5 transition-transform" size={20} />
              <span className="text-[#05010F] font-extrabold uppercase text-sm tracking-wider relative z-10">
                DOWNLOAD NOW
              </span>
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Phones */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[450px] sm:h-[550px] lg:h-[700px] w-full max-w-[280px] sm:max-w-md lg:max-w-none mx-auto lg:mx-0 flex items-center justify-center lg:justify-end mt-12 sm:mt-16 lg:mt-0 transform-gpu"
        >
          {/* Back Phone */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-15%] sm:left-[-5%] lg:left-auto lg:right-[15%] top-[5%] lg:top-[5%] z-10 scale-[0.65] sm:scale-75 lg:scale-90 opacity-80 transform-gpu"
          >
            <div style={{ transform: "rotateY(-15deg) rotateZ(5deg)" }}>
              <PhoneMockup glowColor="pink" imageSrc="/billUI.jpg" priority={true} />
            </div>
          </motion.div>

          {/* Front Phone */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[-15%] sm:right-[-5%] lg:right-[35%] bottom-[5%] lg:bottom-[5%] z-20 scale-[0.75] sm:scale-90 lg:scale-100 shadow-2xl transform-gpu"
          >
            <div style={{ transform: "rotateY(15deg) rotateZ(-5deg)" }}>
              <PhoneMockup glowColor="purple" imageSrc="/PhoneUI.jpg" priority={true} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
