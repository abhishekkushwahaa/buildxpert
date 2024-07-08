import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
const myFont = localFont({ src: "../font/font1.woff2" });

export const metadata: Metadata = {
  title: "BuildXpert",
  description: "Developed by Abhishek Kushwaha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
