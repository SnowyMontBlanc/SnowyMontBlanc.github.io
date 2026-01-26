import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kotone Yoshino | Portfolio",
  description:
    "吉野琴音のポートフォリオサイト - Software Engineer specializing in Java, Kotlin, and mobile app development",
  keywords: ["Software Engineer", "Java", "Kotlin", "Mobile App", "AWS"],
  authors: [{ name: "Kotone Yoshino" }],
  openGraph: {
    title: "Kotone Yoshino | Portfolio",
    description: "Software Engineer - ユーザー体験を大切にするエンジニア",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
