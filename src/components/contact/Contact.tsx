"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Instagram, Facebook, Twitter, Youtube } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden transform-gpu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10 w-full max-w-md mx-auto lg:mx-0 text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tighter uppercase mb-4 text-white">
                GET IN <span className="gold-gradient">TOUCH</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-sm leading-relaxed">
                Have a question or want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-xs mx-auto lg:mx-0">
              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-6 text-left">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-white/70 text-xs sm:text-sm">socialmonkeycrave@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 sm:gap-6 text-left">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-white/70 text-xs sm:text-sm">+91 7304464555</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 sm:gap-6 text-left">
                <div className="w-12 h-12 rounded-full border border-[#7B2CFF]/40 bg-[#7B2CFF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FF2EA6]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex items-center gap-4 justify-center">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF2EA6] hover:shadow-[0_0_15px_rgba(255,46,166,0.3)] transition-all duration-300">
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="glass-card bg-[#11052C]/60 border-[#7B2CFF]/30 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CFF]/10 to-[#FF2EA6]/10 opacity-50 pointer-events-none" />
              
              <form className="relative z-10 flex flex-col gap-4 sm:gap-6 w-full">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all text-sm sm:text-base" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all text-sm sm:text-base" />
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all text-sm sm:text-base" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-[#05010F]/50 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CFF] focus:shadow-[0_0_10px_rgba(123,44,255,0.3)] transition-all resize-none text-sm sm:text-base"></textarea>
                </div>
                <button type="submit" className="w-full animated-gradient-button py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Download APK Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-24 glass-card bg-[#11052C]/60 border-[#7B2CFF]/30 p-6 sm:p-8 md:p-12 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#05010F] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
              <Download className="text-[#FF2EA6] w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1 sm:mb-2 uppercase">GET THE APP NOW</h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-xs sm:max-w-sm mx-auto sm:mx-0">Download the APK file directly to your device and start your journey.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-auto flex-1 max-w-xs mx-auto lg:mx-0 flex justify-center lg:justify-end">
            <a 
              href="/apk/app-release.apk" 
              download="app-release.apk"
              className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#7B2CFF] to-[#FF2EA6] rounded-full shadow-[0_0_20px_rgba(123,44,255,0.3)] hover:shadow-[0_0_30px_rgba(123,44,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group relative overflow-hidden text-center cursor-pointer text-white font-extrabold uppercase text-sm tracking-wider"
            >
              <Download className="text-white shrink-0 group-hover:translate-y-0.5 transition-transform" size={20} />
              <span>DOWNLOAD NOW</span>
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
