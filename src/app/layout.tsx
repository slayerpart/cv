import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React, { PropsWithChildren } from "react";
import { NavBar } from "@/components/nav-bar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
