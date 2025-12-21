"use client";

import { Instrument_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>UUKA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={openSans.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
