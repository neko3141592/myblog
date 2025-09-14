import type { Metadata } from "next";
import { Geist, Geist_Mono, M_PLUS_1p } from "next/font/google";
import Header from "@/components/layout/header";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Icons from "@/components/layout/icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mplus = M_PLUS_1p({
  variable: "--font-mplus",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "neko3141592のブログ",
  description: "neko3141592のブログへようこそ！Web開発・日常などについて発信中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mplus.variable} antialiased font-sans bg-gray-50`}
        style={{ fontFamily: "var(--font-mplus), var(--font-geist-sans), sans-serif" }}
      >
        <Header />
        <main className="font-sans pt-32 min-h-screen">
          {children}
        </main>
        <Icons />
        <Footer />
      </body>
    </html>
  );
}