import Hero from "@/components/hero/Hero";
import Text from "@/components/text/Text";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero className={styles.hero}>
        <div className={styles.contentSm}>
          <Text size="md" variant="primary">
            Full stack <br />
            developer
          </Text>
          <Text size="lg" variant="primary">
            Cristian
          </Text>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.contentMd}>
          <Text size="xlg" variant="primary">
            Hello, I am Cristian, Full stack developer
          </Text>
          <Text size="sm" variant="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            dicta voluptatem! Vitae beatae dolorem voluptas autem repudiandae
            culpa incidunt, adipisci neque consectetur.
          </Text>
        </div>
        <Image
          src="/myphoto.png"
          alt="Developer profile"
          fill={true}
          sizes="(min-width: 745px) 80vw, (min-width: 1000px) 50vw, 100vw"
          priority
          className={styles.profile}
        />
      </Hero>
    </div>
  );
}
