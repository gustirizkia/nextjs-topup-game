import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAST TOPUP",
  description: "Topup Mudah, Cepat dan Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-[#f6f8fd] min-h-screen`}>
        <NextTopLoader />
        <Topbar />
        {children}
      </body>
    </html>
  );
}
