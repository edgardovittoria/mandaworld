import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/(navbar)/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper"; // 👈 importa wrapper

export const myFont = localFont({ src: "./font/manda.woff2", variable: "--font-manda" });
export const moltors = localFont({ src: "./font/moltors.ttf", variable: "--font-moltors" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mandaworld",
  description: "Mandaworld Palena",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${myFont.variable} ${inter.variable} ${moltors.variable} bg-[#03051A]`}>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
