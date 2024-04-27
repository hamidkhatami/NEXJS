import type { Metadata } from "next";
import { Inter, Roboto_Mono, Roboto } from "next/font/google";
import { inter } from "../app/ui/fonts";
import localFont from "next/font/local";

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
  variable: "--aa",
  display: "swap",
});
const roboto_mono3 = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const myLocalFont = localFont({
  // src: "../public/font/Delius-Regular.ttf",
  src: "../public/font/OpenSans-ExtraBoldItalic.woff",
  style: "italic",
});
const robotofonts = localFont({
  src: [
    {
      // path: "../public/font/tahoma.ttf",
      path: "../public/font/OpenSans-ExtraBoldItalic.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/font/OpenSans-ExtraBoldItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/OpenSans-Regular.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/OpenSans-Regular.woff",
      weight: "400",
      style: "italic",
    },
  ],
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
        <div className={myLocalFont.className}>local font </div>
        <div className={robotofonts.className[2]}>mmmyyyylocal font </div>
      </body>
    </html>
  );
}
