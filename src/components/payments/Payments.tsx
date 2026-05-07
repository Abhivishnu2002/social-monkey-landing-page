"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Receipt, SplitSquareHorizontal } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const features = [
  { icon: Receipt, text: "Instant venue bill payments" },
  { icon: Zap, text: "Exclusive pre-book discounts" },
  { icon: ShieldCheck, text: "Secure payment experience" },
  { icon: CheckCircle2, text: "Fast booking confirmation" },
  { icon: SplitSquareHorizontal, text: "Seamless nightlife transactions" },
];

export function Payments() {
  return (
    <section id="payments" className="relative py-24 overflow-hidden bg-[#05010F]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#7B2CFF]/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#FF2EA6]/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto lg:mx-0 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block border border-[#7B2CFF]/30 bg-[#7B2CFF]/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
                <span className="text-[#FFBF36] font-bold tracking-wider text-xs uppercase">SEAMLESS NIGHTLIFE PAYMENTS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase mb-6 leading-tight text-white">
                Pay Bills. <br />
                <span className="gold-gradient">Split Costs.</span> <br />
                <span className="gradient-text">Book Instantly.</span>
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed font-body max-w-lg mb-8">
                Showcase how users can securely pay venue bills, unlock exclusive offers, split group expenses, and enjoy a frictionless nightlife experience directly from the Social Monkey app.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#7B2CFF]/10 border border-[#7B2CFF]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7B2CFF]/20 group-hover:border-[#7B2CFF]/60 transition-all">
                    <feature.icon className="text-[#FF2EA6]" size={16} />
                  </div>
                  <span className="text-white/90 font-medium group-hover:text-white transition-colors">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
            >
              <button className="animated-gradient-button px-8 py-4 text-sm whitespace-nowrap">
                EXPLORE PAYMENTS
              </button>
            </motion.div>
          </div>

          {/* Right: Mockups */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end perspective-1000 order-2 mt-12 lg:mt-0"
          >
            {/* Back Phone (Payment Success or Second UI) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 lg:left-auto lg:right-[15%] top-[-5%] lg:top-[5%] z-10 scale-[0.8] sm:scale-90 md:scale-100 opacity-60 mix-blend-lighten"
              style={{ transform: "translateX(-40%) rotateY(-15deg) rotateZ(5deg)" }}
            >
              <PhoneMockup glowColor="pink" imageSrc="/paymentSuccessUI.jpg" />
            </motion.div>

            {/* Front Phone (Bill UI) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-1/2 lg:left-auto lg:right-[35%] bottom-[-5%] lg:bottom-[5%] z-20 scale-[0.85] sm:scale-95 md:scale-110 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              style={{ transform: "translateX(-60%) rotateY(15deg) rotateZ(-5deg)" }}
            >
              <PhoneMockup glowColor="purple" imageSrc="/billUI.jpg" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
