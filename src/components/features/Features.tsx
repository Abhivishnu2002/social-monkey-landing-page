"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Users, Crown, CreditCard, ClipboardCheck } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const features = [
  {
    icon: CalendarHeart,
    title: "Discover Events",
    desc: "Find the best parties, concerts, and experiences happening around you.",
  },
  {
    icon: Users,
    title: "Connect & Socialize",
    desc: "Meet like-minded people and build your nightlife crew.",
  },
  {
    icon: Crown,
    title: "Exclusive Offers",
    desc: "Unlock special discounts, pre-book offers, and VIP experiences.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    desc: "Seamless in-app payments for bills, bookings, and more.",
  },
  {
    icon: ClipboardCheck,
    title: "Your Night, Your Way",
    desc: "Personalized recommendations tailored to your vibe.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-[#02000A]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#7B2CFF]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF2EA6]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end perspective-1000 order-2 lg:order-1 w-full"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "rotateY(10deg) rotateZ(-2deg)" }}
              className="w-full flex justify-center lg:justify-end"
            >
              <PhoneMockup glowColor="purple" imageSrc="/PhoneUI.jpg" />
            </motion.div>
          </motion.div>

          {/* Right: Features List */}
          <div className="flex flex-col gap-10 order-1 lg:order-2 w-full max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
                FEATURES THAT <br />
                <span className="gold-gradient">ELEVATE YOUR NIGHTS</span>
              </h2>
              <p className="text-lg text-white/80">
                Everything you need for the perfect night out, all in one app.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-[#7B2CFF] blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full" />
                      <div className="relative w-12 h-12 rounded-full border border-[#7B2CFF]/50 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#7B2CFF]/20">
                        <feature.icon className="text-[#FF2EA6]" size={24} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8 border-b border-white/10 group-hover:border-[#7B2CFF]/50 transition-colors duration-300">
                      <h4 className="text-[#FFBF36] font-bold text-xl mb-2">{feature.title}</h4>
                      <p className="text-white/70 leading-relaxed text-base">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
