import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps {
  className?: string;
  imageSrc?: string;
  glowColor?: "purple" | "pink";
}

export function PhoneMockup({ className, imageSrc, glowColor = "purple" }: PhoneMockupProps) {
  return (
    <div className={cn("relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] shrink-0 mx-auto", className)}>
      {/* Outer Glow */}
      <div 
        className={cn(
          "absolute inset-0 rounded-[3rem] blur-2xl opacity-40 mix-blend-screen transition-all duration-700 pointer-events-none",
          glowColor === "purple" ? "bg-[#7B2CFF]" : "bg-[#FF2EA6]"
        )}
      />
      
      {/* Phone Frame */}
      <div className="relative w-full h-full bg-[#111] rounded-[3rem] p-2 sm:p-3 border-[6px] border-[#222] shadow-2xl z-10 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-[#222] rounded-b-3xl z-30 flex items-center justify-center gap-2">
          <div className="w-10 sm:w-12 h-1.5 bg-[#111] rounded-full" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#111] rounded-full" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#05010F] rounded-[2rem] overflow-hidden">
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt="App UI" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E0B3B] to-[#05010F] flex flex-col items-center justify-center p-6 text-center">
              <Image 
                src="/socialmonkey.png" 
                alt="Social Monkey" 
                width={120} 
                height={50} 
                className="mb-4 w-auto h-auto"
              />
              <p className="text-sm text-white/70">Swing into the Nightlife!</p>
            </div>
          )}
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-10 px-5 sm:px-6 flex items-center justify-between z-20 text-[10px] font-medium text-white mix-blend-difference">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-0.5 h-2.5">
                <div className="w-0.5 h-1 bg-white rounded-sm"/>
                <div className="w-0.5 h-1.5 bg-white rounded-sm"/>
                <div className="w-0.5 h-2 bg-white rounded-sm"/>
                <div className="w-0.5 h-2.5 bg-white rounded-sm"/>
              </div>
              <div className="w-3 h-2.5 rounded-sm border border-white relative">
                <div className="absolute inset-0.5 bg-white rounded-[1px] w-[60%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
