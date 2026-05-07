import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Social Monkey — Swing into the Nightlife",
  description: "Your all-in-one app to discover experiences, connect with great people, and make every night unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-[#05010F] text-[#F5F5F5] antialiased selection:bg-[#7B2CFF] selection:text-white"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
