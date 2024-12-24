import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hazem Khaled - Portfolio",
  description: "Welcome to Hazem Khaled's portfolio website. Explore my projects, testimonials, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TXTW65FS" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
