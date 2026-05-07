import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02000A] pt-20 pb-10 overflow-hidden">
      {/* Top Divider Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B2CFF]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] shadow-[0_0_20px_rgba(123,44,255,0.8)]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Desc */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-heading font-black text-2xl tracking-tighter leading-none flex flex-col">
                <span className="text-[#7B2CFF]">S<span className="text-white">OC</span>IAL</span>
                <span className="text-white">M<span className="text-[#FF2EA6]">ON</span>KEY</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Your all-in-one app to discover experiences, connect with great people, and make every night unforgettable.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Features', 'How It Works', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-white/60 hover:text-[#FF2EA6] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-4">
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Community Guidelines'].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-sm text-white/60 hover:text-[#7B2CFF] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#7B2CFF] hover:border-[#7B2CFF] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Social Monkey App. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>Designed with 💜 for the Nightlife.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
