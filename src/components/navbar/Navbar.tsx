"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#05010F]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <div className="font-heading font-black text-2xl tracking-tighter leading-none flex flex-col">
            <span className="text-[#7B2CFF]">S<span className="text-white">OC</span>IAL</span>
            <span className="text-white">M<span className="text-[#FF2EA6]">ON</span>KEY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B2CFF] to-[#FF2EA6] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
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
          className="md:hidden relative z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#05010F] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-bold text-white hover:text-[#FF2EA6] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-4">
            <Link href="#" className="text-white hover:text-[#FF2EA6] transition-colors"><Instagram size={24} /></Link>
            <Link href="#" className="text-white hover:text-[#7B2CFF] transition-colors"><Facebook size={24} /></Link>
            <Link href="#" className="text-white hover:text-white transition-colors"><Twitter size={24} /></Link>
          </div>
          <button className="animated-gradient-button mt-4">GET UPDATES</button>
        </motion.div>
      </div>
    </motion.header>
  );
}
