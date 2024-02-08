import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Analytics } from "@vercel/analytics/react";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
