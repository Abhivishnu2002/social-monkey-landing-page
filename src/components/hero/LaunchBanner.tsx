"use client";

import { useEffect, useState } from "react";
import { Apple, Play } from "lucide-react";

export function LaunchBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-30 w-full">
      <div className="glass-card bg-[#11052C]/90 border-[#7B2CFF]/30 p-6 md:p-8 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden w-full">
        {/* Glow Effects - Optimized */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(123,44,255,0.4)_0%,rgba(123,44,255,0)_70%)] rounded-full pointer-events-none transform-gpu hidden sm:block" />
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(255,46,166,0.4)_0%,rgba(255,46,166,0)_70%)] rounded-full pointer-events-none transform-gpu hidden sm:block" />

        {/* Left: App Stores */}
        <div className="flex flex-col items-center lg:items-start gap-4 relative z-10 w-full lg:w-auto text-center lg:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wider">
              Launching Soon
            </h3>
            <p className="text-sm text-white/70 mt-1">Get ready to redefine your nightlife.</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl px-4 py-2 backdrop-blur-sm group w-full sm:w-auto justify-center">
              <Apple size={20} className="text-white group-hover:text-[#FFBF36] transition-colors" />
              <div className="text-left flex flex-col">
                <span className="text-[10px] text-white/60 leading-none">Download on the</span>
                <span className="text-sm font-semibold text-white leading-none mt-0.5">App Store</span>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl px-4 py-2 backdrop-blur-sm group w-full sm:w-auto justify-center">
              <Play size={20} className="text-white group-hover:text-[#FF2EA6] transition-colors" />
              <div className="text-left flex flex-col">
                <span className="text-[10px] text-white/60 leading-none">GET IT ON</span>
                <span className="text-sm font-semibold text-white leading-none mt-0.5">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Countdown */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 relative z-10 w-full lg:w-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-[#05010F]/50 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-inner">
                <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-black gold-gradient">
                  {value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest font-semibold">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
