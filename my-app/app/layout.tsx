import type { Metadata } from "next";
import { Inter, Roboto_Mono, Roboto } from "next/font/google";
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

const inter3 = Inter({
  subsets: ["latin"],
  variable: "--a",
  display: "swap",
});
const roboto_mono3 = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
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
      <body>
        {/* <div className={inter.className}>{children}</div>
        <div className={roboto.className}>{children}</div> */}
        <div className={`${inter3.variable} ${roboto_mono3.variable}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
