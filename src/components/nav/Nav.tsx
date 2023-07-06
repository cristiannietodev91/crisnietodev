import React from "react";
import { UrlObject } from "url";
import NavItem from "./NavItem";
import style from "./Nav.module.css";

export type NavItem = { text: string; href: string | UrlObject };

type NavProps = {
  items: Array<NavItem>;
};

const Nav = ({ items }: NavProps) => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.text} className={style.item}>
            <NavItem href={item.href}>{item.text}</NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
