import type React from "react";
import "./global.css";
import { defaultMetadata } from "@/utils/seo";
import Navbar from "@/components/navbar";
import { Bricolage_Grotesque } from "next/font/google";
import { basePath } from "../../next.config";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export const metadata = { ...defaultMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <head>
        <link rel="icon" type="image/x-icon" sizes="48x48" href={`${basePath}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
      </head>
      <body className="antialiased">
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
