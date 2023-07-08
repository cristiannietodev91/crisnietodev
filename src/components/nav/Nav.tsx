"use client";

import React, { useState } from "react";
import cx from "classnames";
import { UrlObject } from "url";
import NavItem from "./NavItem";
import styles from "./Nav.module.css";
import Image from "next/image";

export type NavItem = { text: string; href: string | UrlObject };

type NavProps = {
  items: Array<NavItem>;
};

const Nav = ({ items }: NavProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={cx(styles.row)}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={40}
        priority
      />
      <button
        className={styles.navToggle}
        aria-label="open navigation"
        onClick={() => setVisible(!visible)}
      >
        <span className={styles.hamburger}></span>
      </button>
      <nav
        className={cx(styles.nav, {
          [styles.navVisible]: visible,
        })}
      >
        <ul className={styles.navList}>
          {items.map((item) => (
            <li key={item.text} className={styles.navItem}>
              <NavItem href={item.href}>{item.text}</NavItem>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
