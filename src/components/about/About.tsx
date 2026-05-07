"use client";

import { motion } from "framer-motion";
import { Flag, Eye, Shield, Calendar, Users, MapPin, Building2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Calendar, value: "500+", label: "Curated Events" },
  { icon: Users, value: "10K+", label: "Happy Users" },
  { icon: Building2, value: "50+", label: "Partner Venues" },
  { icon: Shield, value: "20+", label: "Cities (and growing)" },
];

const aboutItems = [
  {
    icon: Flag,
    title: "Our Mission",
    desc: "To make every night out more exciting, social, and seamless.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To build the world's most trusted nightlife community.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    desc: "Curated experiences, real connections, and unforgettable nights.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 max-w-2xl mx-auto lg:mx-0 w-full"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase mb-6">
                <span className="text-white">ABOUT </span>
                <span className="gold-gradient">SOCIAL MONKEY</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-body max-w-lg">
                Social Monkey is your ultimate nightlife companion. We bring people, events, and experiences together in one seamless app.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {aboutItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#7B2CFF]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#FFBF36] font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Top Right Image */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] right-0 w-[75%] h-[240px] rounded-[2rem] overflow-hidden border border-[#FF2EA6]/40 pink-glow z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop" 
                alt="Friends drinking" 
                fill 
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>

            {/* Middle Left Image */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[30%] left-[5%] w-[60%] h-[220px] rounded-[2rem] overflow-hidden border border-[#FFBF36]/40 shadow-[0_0_20px_rgba(255,191,54,0.3)] z-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop" 
                alt="Party crowd" 
                fill 
                className="object-cover"
                sizes="40vw"
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[5%] right-[5%] w-[65%] h-[240px] rounded-[2rem] overflow-hidden border border-[#7B2CFF]/40 purple-glow z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop" 
                alt="Networking event" 
                fill 
                className="object-cover"
                sizes="40vw"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 glass-card border-[#7B2CFF]/20 bg-[#1A0B35]/40 rounded-[2rem] p-8 md:p-12 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                <stat.icon className="text-[#FF2EA6] mb-4" size={32} />
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
