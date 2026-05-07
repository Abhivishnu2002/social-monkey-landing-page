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
    <section id="payments" className="relative py-24 overflow-hidden bg-[#05010F] transform-gpu">
      {/* Background Ambience - optimized with radial gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(123,44,255,0.1)_0%,rgba(123,44,255,0)_70%)] mix-blend-screen transform-gpu" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,46,166,0.05)_0%,rgba(255,46,166,0)_70%)] mix-blend-screen transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-xl mx-auto lg:mx-0 order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block border border-[#7B2CFF]/30 bg-[#7B2CFF]/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 sm:mb-6">
                <span className="text-[#FFBF36] font-bold tracking-wider text-[10px] sm:text-xs uppercase">SEAMLESS NIGHTLIFE PAYMENTS</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase mb-4 sm:mb-6 leading-tight text-white">
                Pay Bills. <br className="hidden sm:block" />
                <span className="gold-gradient">Split Costs.</span> <br className="hidden sm:block" />
                <span className="gradient-text">Book Instantly.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-sm sm:max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8">
                Showcase how users can securely pay venue bills, unlock exclusive offers, split group expenses, and enjoy a frictionless nightlife experience directly from the Social Monkey app.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start w-full max-w-sm mx-auto lg:mx-0"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group text-left w-full justify-center sm:justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#7B2CFF]/10 border border-[#7B2CFF]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7B2CFF]/20 group-hover:border-[#7B2CFF]/60 transition-colors">
                    <feature.icon className="text-[#FF2EA6]" size={16} />
                  </div>
                  <span className="text-white/90 font-medium group-hover:text-white transition-colors text-sm sm:text-base">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-4"
            >
              <button className="animated-gradient-button px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap w-full sm:w-auto">
                EXPLORE PAYMENTS
              </button>
            </motion.div>
          </div>

          {/* Right: Mockups */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[450px] sm:h-[600px] lg:h-[700px] w-full max-w-[280px] sm:max-w-md lg:max-w-none mx-auto lg:mx-0 flex items-center justify-center lg:justify-end perspective-1000 order-2 mt-8 lg:mt-0 transform-gpu"
          >
            {/* Back Phone */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-15%] sm:left-[-5%] lg:left-auto lg:right-[15%] top-[5%] lg:top-[5%] z-10 scale-[0.65] sm:scale-75 md:scale-100 opacity-60 mix-blend-lighten transform-gpu"
            >
              <div style={{ transform: "rotateY(-15deg) rotateZ(5deg)" }}>
                <PhoneMockup glowColor="pink" imageSrc="/paymentSuccessUI.jpg" priority={false} />
              </div>
            </motion.div>

            {/* Front Phone */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[-15%] sm:right-[-5%] lg:right-[35%] bottom-[5%] lg:bottom-[5%] z-20 scale-[0.75] sm:scale-90 md:scale-110 shadow-2xl transform-gpu"
            >
              <div style={{ transform: "rotateY(15deg) rotateZ(-5deg)" }}>
                <PhoneMockup glowColor="purple" imageSrc="/billUI.jpg" priority={false} />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
