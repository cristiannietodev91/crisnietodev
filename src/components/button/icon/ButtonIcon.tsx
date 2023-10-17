import React, { useEffect, useState } from 'react'
import cx from "classnames";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import styles from "./ButtonIcon.module.css";
import { Button } from "@cristian.nieto.dev/cs-forms";

function ButtonIcon() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme || "dark");
  const Icon = activeTheme === "dark" ? FaLightbulb : FaRegLightbulb;
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <Button variant="plain" onClick={() => setActiveTheme(inactiveTheme)} 
      size="md" style={{ margin: 0, padding: 0 }}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}>
      <Icon className={cx(styles.icon, {
        [styles.isDark]: activeTheme === "dark",
      })} />
    </Button>

  )
}

export default ButtonIcon