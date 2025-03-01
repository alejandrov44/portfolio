import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Open source portfolio from alejandrov44 with next.js",
  keywords: ["open source", "free", "github"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <body className="antialiased">
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
