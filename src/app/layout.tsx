import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/header";
import SocialBar from "@/components/ui/SocialBar";
import SplashCursor from "@/components/ui/SplashCursor";
import Footer from "@/components/layouts/footer";
import ShootingStars from "@/components/ui/ShootingStarEffect";
import ScrollToTop from "@/components/ui/ScrollTop";



const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PortFolio | Tushar Singh",
  description: "PortFolio App 🤗",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnelSans.variable} h-full antialiased`}>
      <body className="font-sans">
        {/* BACKGROUND LAYER (ALWAYS FIRST) */}
        <ShootingStars />
        {/* APP LAYER */}
        <div id="app-root">
          <Header />
          <SplashCursor />
          <SocialBar />

          <main>{children}</main>

          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
