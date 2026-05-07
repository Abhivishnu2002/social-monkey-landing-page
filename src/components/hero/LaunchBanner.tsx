"use client";

import { Bell } from "lucide-react";
import { useState, useEffect } from "react";

export function LaunchBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
      <div className="glass-card bg-[#11052C]/80 border-[#7B2CFF]/30 p-6 md:p-8 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden w-full">
        {/* Glow Effects */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-[#7B2CFF]/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#FF2EA6]/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Left: App Stores */}
        <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto">
          <p className="text-sm text-white/60 font-medium tracking-widest uppercase">Available On</p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-black border border-white/10 rounded-xl px-4 py-2.5 hover:border-white/30 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
               <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white/70 leading-none mb-1">GET IT ON</span>
                  <span className="text-sm text-white font-semibold leading-none">Google Play</span>
               </div>
            </button>
            <button className="flex items-center gap-3 bg-black border border-white/10 rounded-xl px-4 py-2.5 hover:border-white/30 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
               <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white/70 leading-none mb-1">Download on the</span>
                  <span className="text-sm text-white font-semibold leading-none">App Store</span>
               </div>
            </button>
          </div>
        </div>

        {/* Center: Countdown */}
        <div className="flex flex-col items-center gap-4 relative z-10 w-full lg:w-auto lg:border-x border-white/10 lg:px-12">
          <p className="gold-gradient text-sm font-bold tracking-widest uppercase">Launching In</p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-heading font-black">{timeLeft.days}</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase">Days</span>
            </div>
            <span className="text-2xl text-white/20 mb-4">:</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-heading font-black">{timeLeft.hours}</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase">Hours</span>
            </div>
            <span className="text-2xl text-white/20 mb-4">:</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-heading font-black">{timeLeft.minutes}</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase">Minutes</span>
            </div>
            <span className="text-2xl text-white/20 mb-4">:</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-heading font-black">{timeLeft.seconds}</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase">Seconds</span>
            </div>
          </div>
        </div>

        {/* Right: Notify CTA */}
        <div className="flex items-center gap-6 relative z-10 w-full lg:w-auto mt-4 lg:mt-0">
          <div className="w-14 h-14 rounded-full bg-[#7B2CFF]/20 border border-[#7B2CFF]/50 flex items-center justify-center shrink-0">
            <Bell className="text-[#FF2EA6]" size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-lg text-white">Be the first to know!</h4>
            <p className="text-xs text-white/70 max-w-[200px]">Get early access, exclusive updates, and special launch offers.</p>
          </div>
          <button className="hidden xl:block animated-gradient-button px-8 py-3 text-sm ml-4">
            NOTIFY ME
          </button>
        </div>
      </div>
    </div>
  );
}
