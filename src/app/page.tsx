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
          <Text size="xlg" variant="primary" className={styles.titleHero}>
            Hello, I am Cristian, Full stack developer
          </Text>
          <Text size="sm" variant="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            dicta voluptatem! Vitae beatae dolorem voluptas autem repudiandae
            culpa incidunt, adipisci neque consectetur.
          </Text>
        </div>
        <Image
          src="/profile.png"
          alt="Developer picture"
          width={550}
          height={934}
          priority
          className={styles.profile}
        />
      </Hero>
      <Hero>
        <Text size="lg" variant="primary" textAlign="center" className={styles.titleAbout}>
          About me
        </Text>
        <Text size="md" variant="primary" textAlign="center" className={styles.subtitleAbout}>
          Full stack developer at Spark
        </Text>
        <Text size="sm" variant="primary" textAlign="justify" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quaerat laudantium dolore. At aspernatur maiores ut delectus eos
          repellat sapiente rerum non perferendis voluptatem eum iste id sequi
          nihil doloribus illum, tempore labore libero, explicabo praesentium?
          Doloribus reprehenderit consequuntur laborum perspiciatis, minima
          sapiente culpa, praesentium non amet necessitatibus ipsam a fugiat
          consectetur earum?.
        </Text>
      </Hero>
    </div>
  );
}
