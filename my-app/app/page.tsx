import Image from "next/image";
import styles from "../app/ui/home.module.css";


export default function Home() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
      <p>Hello Next</p>
      <h1 className="text-blue-500">I'm blue!</h1>
      <div className={styles.shape} />
    </main>
  );
}
