"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook, Twitter } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#05010F]/80 backdrop-blur-xl border-b border-white/5 py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center shrink-0">
          <Image 
            src="/socialmonkey.png" 
            alt="Social Monkey Logo" 
            width={160} 
            height={60} 
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B2CFF] to-[#FF2EA6] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-4 text-white/70">
            <Link href="#" className="hover:text-[#FF2EA6] transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-[#7B2CFF] transition-colors"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter size={18} /></Link>
          </div>
          <button className="animated-gradient-button text-sm px-6 py-2.5">
            GET UPDATES
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#05010F] z-40 flex flex-col items-center justify-center gap-8 lg:hidden h-[100dvh] w-full px-4"
        >
          <Image 
            src="/socialmonkey.png" 
            alt="Social Monkey Logo" 
            width={180} 
            height={70} 
            className="mb-4 w-auto h-12 sm:h-16 object-contain"
          />
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl sm:text-2xl font-heading font-bold text-white hover:text-[#FF2EA6] transition-colors text-center w-full py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-8 mt-6">
            <Link href="#" className="text-white hover:text-[#FF2EA6] transition-colors p-2"><Instagram size={24} /></Link>
            <Link href="#" className="text-white hover:text-[#7B2CFF] transition-colors p-2"><Facebook size={24} /></Link>
            <Link href="#" className="text-white hover:text-white transition-colors p-2"><Twitter size={24} /></Link>
          </div>
          <button className="animated-gradient-button mt-4 w-full max-w-xs text-center justify-center flex">GET UPDATES</button>
        </motion.div>
      </div>
    </motion.header>
  );
}
