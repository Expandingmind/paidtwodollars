import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixBackground from "@/components/MatrixBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paid Two Dollars",
  description: "A social experiment about curiosity.",
  openGraph: {
    title: "Paid Two Dollars",
    description: "A tiny social experiment about curiosity, FOMO, and human behavior.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <MatrixBackground>
          {children}
        </MatrixBackground>
      </body>
    </html>
  );
}
