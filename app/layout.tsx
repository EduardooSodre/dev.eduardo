import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./components/aos-init";
import Spline from '@splinetool/react-spline/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev.Eduardo",
  description: "Portfolio dev.Eduardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative z-10">{children}</main>
        <AosInit />
        <Spline
          scene="https://prod.spline.design/y3si32yywDhvMW3l/scene.splinecode"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            clipPath: "inset(0 0 32px 0)",
            pointerEvents: "none",
          }}
        />
      </body>
    </html>
  );
}
