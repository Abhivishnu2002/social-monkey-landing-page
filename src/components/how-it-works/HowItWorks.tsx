"use client";

import { motion } from "framer-motion";
import { Smartphone, Search, Users, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download The App",
    desc: "Install Social Monkey from Play Store or App Store.",
  },
  {
    icon: Search,
    title: "Discover & Explore",
    desc: "Browse events, venues, and experiences around you.",
  },
  {
    icon: Users,
    title: "Connect & Join",
    desc: "Connect with people, join groups, and book your spot.",
  },
  {
    icon: CreditCard,
    title: "Enjoy & Pay",
    desc: "Enjoy the night and pay securely through the app.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4">
            <span className="text-white">HOW IT </span>
            <span className="gold-gradient">WORKS</span>
          </h2>
          <p className="text-lg text-white/80">Get started in 4 simple steps</p>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start justify-between max-w-5xl mx-auto gap-10 md:gap-0">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[70px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
             <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="w-full h-full bg-gradient-to-r from-[#7B2CFF] to-[#FF2EA6] origin-left"
             />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center max-w-[200px] mx-auto group"
            >
              {/* Step Number */}
              <div className="w-8 h-8 rounded-full bg-[#7B2CFF] text-white font-bold flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(123,44,255,0.6)]">
                {idx + 1}
              </div>

              {/* Icon Circle */}
              <div className="w-[140px] h-[140px] rounded-full border-2 border-white/10 bg-[#05010F] flex items-center justify-center mb-6 group-hover:border-[#FF2EA6]/50 group-hover:shadow-[0_0_30px_rgba(255,46,166,0.3)] transition-all duration-500 relative">
                <div className="absolute inset-2 rounded-full border border-dashed border-white/20 group-hover:animate-[spin_10s_linear_infinite]" />
                <step.icon className="text-[#7B2CFF] group-hover:text-[#FF2EA6] transition-colors duration-300" size={48} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h4 className="text-[#FFBF36] font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-5xl mx-auto glass-card relative overflow-hidden rounded-[2rem] border-[#7B2CFF]/30 p-8 md:p-12"
        >
          {/* Banner Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010F] via-[#05010F]/80 to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">Your night out, made simple.</h3>
              <p className="text-xl gold-gradient font-bold uppercase tracking-wider">More fun. Less hassle.</p>
            </div>
            <button className="animated-gradient-button px-10 py-4 text-sm whitespace-nowrap">
              GET UPDATES
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
