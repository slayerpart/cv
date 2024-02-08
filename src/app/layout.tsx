import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
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
  const cookieStore = cookies();
  const darkMode = cookieStore.get("darkMode")?.value || "false";

  return (
    <html
      lang="en"
      className={`${inter.className} ${darkMode === "true" && "dark"}`}
    >
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
