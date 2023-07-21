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
          src="/profile.png"
          alt="Developer profile"
          width={550}
          height={934}
          priority
          className={styles.profile}
        />
      </Hero>
      <Hero>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          reiciendis sunt eaque vero sit nulla molestiae similique dignissimos,
          corporis minus facilis accusamus voluptas, at ea. Odit placeat ullam
          cupiditate quia. Quos officiis doloribus nulla, consequatur iusto est
          magni quis unde recusandae? Dolorem illo cupiditate molestiae
          inventore, ab eos est nulla animi consequuntur deserunt accusamus
          illum provident! Inventore quibusdam magni nulla.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          minima quae earum rem, neque aliquam in eum necessitatibus similique
          eius alias blanditiis quasi sequi vero ut! Possimus illo minus libero?
        </div>
      </Hero>
    </div>
  );
}
