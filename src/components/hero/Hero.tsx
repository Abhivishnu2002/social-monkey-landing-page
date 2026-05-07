"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Wine, CreditCard, Mail } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const features = [
  { icon: Calendar, title: "DISCOVER", desc: "Top events & experiences" },
  { icon: Users, title: "CONNECT", desc: "Meet like-minded people" },
  { icon: Wine, title: "EXCLUSIVE", desc: "Offers & curated experiences" },
  { icon: CreditCard, title: "CONVENIENT", desc: "Easy payments & more" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-[#7B2CFF]/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#FF2EA6]/10 blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/Social%20monkey_page-0001.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010F]/80 via-[#05010F]/90 to-[#05010F]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <span className="gold-gradient font-semibold tracking-wider text-sm md:text-base uppercase">
                Swing into the Nightlife!
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-heading font-black leading-[1.1] tracking-tighter uppercase">
              <span className="block text-white">SOCIAL MONKEY</span>
              <span className="block gold-gradient">COMING SOON</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-body">
              Your all-in-one app to discover experiences, connect with great people, and make every night unforgettable.
            </p>
          </motion.div>

          {/* Features Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
          >
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full border border-[#7B2CFF]/50 bg-[#7B2CFF]/10 flex items-center justify-center text-[#7B2CFF] shadow-[0_0_15px_rgba(123,44,255,0.2)]">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="gold-gradient font-bold text-sm uppercase">{item.title}</h3>
                  <p className="text-xs text-white/60 mt-1 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Notify Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 p-2 rounded-full glass-card max-w-xl">
              <div className="flex-1 flex items-center gap-3 px-4 py-2">
                <Mail className="text-white/50" size={20} />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/50 focus:ring-0"
                />
              </div>
              <button className="animated-gradient-button sm:w-auto w-full py-4 uppercase font-bold text-sm tracking-wider gold-gradient relative overflow-hidden group">
                <span className="text-black relative z-10 transition-colors duration-300">NOTIFY ME</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF36] to-[#FFAA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            {/* Fake button overlay for exact design match from screenshots */}
            <div className="absolute right-2 top-2 bottom-2 rounded-full bg-gradient-to-r from-[#FFBF36] to-[#FFAA00] items-center justify-center px-8 sm:flex hidden hover:scale-[1.02] transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,191,54,0.4)]">
                <span className="text-black font-bold uppercase text-sm tracking-wider">NOTIFY ME</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Phones */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] sm:h-[600px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end mt-16 lg:mt-0"
        >
          {/* Back Phone */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 lg:left-auto lg:right-[15%] top-[-5%] lg:top-[5%] z-10 scale-[0.8] sm:scale-90 md:scale-100 opacity-80"
            style={{ transform: "translateX(-40%) rotateY(-15deg) rotateZ(5deg)" }}
          >
            <PhoneMockup glowColor="pink" imageSrc="/billUI.jpg" />
          </motion.div>

          {/* Front Phone */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-1/2 lg:left-auto lg:right-[35%] bottom-[-5%] lg:bottom-[5%] z-20 scale-[0.85] sm:scale-95 md:scale-110 shadow-2xl"
            style={{ transform: "translateX(-60%) rotateY(15deg) rotateZ(-5deg)" }}
          >
            <PhoneMockup glowColor="purple" imageSrc="/PhoneUI.jpg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
