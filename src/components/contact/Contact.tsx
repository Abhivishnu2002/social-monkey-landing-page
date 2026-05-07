"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Instagram, Facebook, Twitter, Youtube } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
                GET IN <span className="gold-gradient">TOUCH</span>
              </h2>
              <p className="text-lg text-white/80 max-w-md leading-relaxed">
                Have a question or want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-white/70">hello@socialmonkey.app</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-white/70">+91 98765 43210</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-white/70">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF2EA6] hover:shadow-[0_0_15px_rgba(255,46,166,0.3)] transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card bg-[#11052C]/60 border-[#7B2CFF]/30 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CFF]/10 to-[#FF2EA6]/10 opacity-50 pointer-events-none" />
              
              <form className="relative z-10 flex flex-col gap-6">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all" />
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full animated-gradient-button py-4 text-sm font-bold uppercase tracking-wider mt-2">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Newsletter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 glass-card bg-[#11052C]/60 border-[#7B2CFF]/30 p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#05010F] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
              <Mail className="text-[#FF2EA6]" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase">STAY IN THE LOOP</h3>
              <p className="text-white/70 text-sm max-w-sm">Get updates on our launch, exclusive offers, and curated events.</p>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden border border-white/10 bg-[#05010F]/50 focus-within:border-[#7B2CFF] focus-within:shadow-[0_0_15px_rgba(123,44,255,0.2)] transition-all">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:outline-none text-sm"
              />
              <button className="bg-gradient-to-r from-[#7B2CFF] to-[#FF2EA6] text-white font-bold uppercase text-xs tracking-wider px-8 py-4 hover:brightness-110 transition-all">
                NOTIFY ME
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
