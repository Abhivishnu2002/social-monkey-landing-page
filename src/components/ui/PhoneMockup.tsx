import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps {
  className?: string;
  imageSrc?: string;
  glowColor?: "purple" | "pink";
  priority?: boolean;
}

export function PhoneMockup({ className, imageSrc, glowColor = "purple", priority = false }: PhoneMockupProps) {
  return (
    <div className={cn("relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] shrink-0 mx-auto transform-gpu", className)}>
      {/* Outer Glow - Replaced expensive blur with radial gradient for performance */}
      <div 
        className={cn(
          "absolute inset-[-20%] rounded-[3rem] opacity-40 mix-blend-screen pointer-events-none transform-gpu",
          glowColor === "purple" 
            ? "bg-[radial-gradient(ellipse_at_center,rgba(123,44,255,0.8)_0%,rgba(123,44,255,0)_70%)]" 
            : "bg-[radial-gradient(ellipse_at_center,rgba(255,46,166,0.8)_0%,rgba(255,46,166,0)_70%)]"
        )}
      />
      
      {/* Phone Frame */}
      <div className="relative w-full h-full bg-[#111] rounded-[3rem] p-2 sm:p-3 border-[6px] border-[#222] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-10 overflow-hidden transform-gpu">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-[#222] rounded-b-3xl z-30 flex items-center justify-center gap-2">
          <div className="w-10 sm:w-12 h-1.5 bg-[#111] rounded-full" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#111] rounded-full" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#05010F] rounded-[2rem] overflow-hidden transform-gpu">
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt="App UI" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 280px, 320px"
              priority={priority}
              quality={85}
              loading={priority ? "eager" : "lazy"}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E0B3B] to-[#05010F] flex flex-col items-center justify-center p-6 text-center">
              <Image 
                src="/socialmonkey.png" 
                alt="Social Monkey" 
                width={120} 
                height={50} 
                className="mb-4 w-auto h-auto"
                priority={priority}
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
