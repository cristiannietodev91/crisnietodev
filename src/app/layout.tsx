import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import { Exo_2 } from "next/font/google";
import styles from "./layout.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";
import '@cristian.nieto.dev/cs-forms/dist/css/styles.css'
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata: Metadata = {
  title: "Cristian Nieto | Developer | Engineer",
  description: "Cristian Nieto developer portfolio",
  verification: {
    google: "_zmnW7eLhbxrhkxBaUzs6boWBnesR8dBs0RUZaO7CAc"
  }
};

export default function RootLayout({
  children,
}: {children: React.ReactNode;
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_GTM}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_GTM}');
        `}
      </Script>
    </html>
  );
}
