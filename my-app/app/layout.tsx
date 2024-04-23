import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/ui/globals.css";
import { Roboto } from "next/font/google";
import { inter } from "../app/ui/fonts";

const inter2 = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Layout UI */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
