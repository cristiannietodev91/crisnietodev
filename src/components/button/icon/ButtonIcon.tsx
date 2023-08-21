import React, { useEffect, useState } from 'react'
import cx from "classnames";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import styles from "./ButtonIcon.module.css";

type Props = {}

function ButtonIcon({}: Props) {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme || "dark");
  const Icon = activeTheme === "dark" ? FaLightbulb : FaRegLightbulb;
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <Icon onClick={() => setActiveTheme(inactiveTheme)} className={cx(styles.icon, {
        [styles.isDark]: activeTheme === "dark",
    })}/>
  )
}

export default ButtonIcon