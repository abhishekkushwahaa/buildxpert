import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import ModalProvider from "@/providers/modal-provider";
import { Toaster as SonnarToaster } from "@/components/ui/sonner";
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
      <body className={myFont.className}>
        <ModalProvider>
          {children}
          <Toaster />
          <SonnarToaster position="bottom-left" />
        </ModalProvider>
      </body>
    </html>
  );
}
