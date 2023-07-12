"use client";

import React, { useState } from "react";
import cx from "classnames";
import { UrlObject } from "url";
import NavItem from "./NavItem";
import styles from "./Nav.module.css";

import Text from "@/components/text/Text";
import ToggleButton from "../button/toggle/Toggle";

export type NavItem = { text: string; href: string | UrlObject };

type NavProps = {
  items: Array<NavItem>;
};

const Nav = ({ items }: NavProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ToggleButton></ToggleButton>
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
              <NavItem href={item.href}>
                <Text>{item.text}</Text>
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
