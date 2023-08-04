"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KWDBS6R7" });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
