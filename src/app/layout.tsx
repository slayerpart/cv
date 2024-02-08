import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Viewport } from "next";

import "./globals.css";
import React, { PropsWithChildren } from "react";
import { NavBar } from "@/components/nav-bar";

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
