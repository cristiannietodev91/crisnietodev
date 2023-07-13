"use client"

import React, { useState } from "react";
import dynamic from "next/dynamic";
import cx from "classnames";
import Image from "next/image";
import styles from "./Header.module.css";
import NavItem from "../nav/NavItem";
import Text from "../text/Text";

const ToggleButton = dynamic(() => import("../button/toggle/Toggle"), {
  ssr: false,
})

const items = [
  { href: "/about", text: "About" },
  { href: "/about", text: "Experience" },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cx(styles.header)}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.logo}
        width={100}
        height={40}
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
              <NavItem href={item.href}>
                <Text>{item.text}</Text>
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>
      <div className={cx(styles.row, styles.topRight)}>
        <ToggleButton></ToggleButton>
        <button
          className={styles.navToggle}
          aria-label="open navigation"
          onClick={() => setVisible(!visible)}
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
