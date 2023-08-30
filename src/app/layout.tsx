import "./globals.css";
import Image from "next/image";
import Script from 'next/script'
import { Exo_2 } from "next/font/google";
import styles from "./layout.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata = {
  title: "Cristian Nieto | Developer | Engineer",
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

    function getViewPortHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
      
    }
    document.body.dataset.theme = getUserPreference();
    getViewPortHeight();
  `;

  return (
    <html lang="en">
      <body className={exo2.className}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Header></Header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.main}>
          <Footer></Footer>
        </footer>
        <Image
          src="/profile.png"
          alt="Developer profile"
          width={450}
          height={700}
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    </html>
  );
}
