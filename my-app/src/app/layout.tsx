import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const noto = Noto_Sans({subsets: ['latin'], weight: ['300','400' ,'700']});

export const metadata: Metadata = {
  title: "Calendix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={noto.className}>
      <main className="container">
        <Header />

      
        {children}
      </main>
      </body>
    </html>
  );
}
