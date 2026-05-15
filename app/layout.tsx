// @ts-ignore: side-effect import of CSS globals
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuroFlow",
  description: "AI Enterprise Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} bg-[#050816] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}