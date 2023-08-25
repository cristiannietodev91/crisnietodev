"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import cx from "classnames";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "../button/link/Link";
import Text from "../text/Text";

const ButtonIcon = dynamic(() => import("../button/icon/ButtonIcon"), {
  ssr: false,
});

const items = [
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  { href: "#contact", text: "Contact" },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header
      className={cx(styles.header, {
        [styles.headerVisible]: visible,
      })}
    >
      <Image
        src="/cn.svg"
        alt="CN Logo"
        className={styles.logo}
        width={45}
        height={45}
        priority
      />
      <nav
        className={cx(styles.nav, {
          [styles.navVisible]: visible,
        })}
      >
        <ul className={styles.navList}>
          {items.map((item) => (
            <li key={item.text} className={styles.navItem}>
              <Link href={item.href} onClick={() => setVisible(!visible)}>
                <Text className={styles.textItem}>{item.text}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.row}>
        <ButtonIcon></ButtonIcon>
        <button
          className={styles.navToggle}
          aria-label="open navigation"
          onClick={() => setVisible(!visible)}
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
