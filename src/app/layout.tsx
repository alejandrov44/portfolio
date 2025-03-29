import type React from "react";
import "./global.css";
import { defaultMetadata } from "@/utils/seo";
import Navbar from "@/components/navbar";
import { Bricolage_Grotesque } from "next/font/google";
import { basePath } from "../../next.config";

const bricolageGrotesque = Bricolage_Grotesque({ display: "swap", subsets: ["latin"] });

export const metadata = { ...defaultMetadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={bricolageGrotesque.className} lang="en">
      <head>
        <link href={`${basePath}/favicon.ico`} rel="icon" sizes="48x48" type="image/x-icon" />
        <link href={`${basePath}/favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
        <link href={`${basePath}/favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
        <link href={`${basePath}/apple-touch-icon.png`} rel="apple-touch-icon" sizes="180x180" />
        <link href={`${basePath}/site.webmanifest`} rel="manifest" />
      </head>
      <body className="antialiased">
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
