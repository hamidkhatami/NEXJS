import Image from "next/image";

import { Inter, Roboto_Mono } from "next/font/google";
import "../app/ui/globals.css";

export default function Home() {
  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });
  const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
    display: "swap",
  });
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
      <p>Hello Next</p>
      <h1 className="text-blue-500">I'm blue!</h1>
      <div className={styles.shape} />
      <div className={roboto_mono.className}> italic</div>
    </main>
  );
}
