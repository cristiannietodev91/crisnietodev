import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/nav/Nav";
import type { NavItem } from "@/components/nav/Nav";

const items: Array<NavItem> = [
  { href: "/about", text: "About" },
  { href: "/about", text: "Experience" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav items={items} />
    </main>
  );
}
