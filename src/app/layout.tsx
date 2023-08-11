import "./globals.css";
import cx from "classnames";
import { Exo_2 } from "next/font/google";
import styles from "./layout.module.css";
import Header from "@/components/header/Header";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata = {
  title: "Cristian Nieto",
  description: "Cristian Nieto developer portfolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

  return (
    <html lang="en">
      <body className={exo2.className}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <header className={styles.main}>
          <Header></Header>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.main}>
          <Footer></Footer>
        </footer>
        <Image
          src="/profile.png"
          alt="Developer profile"
          width={450}
          height={760}
          priority
          className={styles.profileSm}
        />
        <Image
          src="/profile.png"
          alt="Developer profile"
          width={600}
          height={1024}
          priority
          className={styles.profileMd}
        />
      </body>
    </html>
  );
}
