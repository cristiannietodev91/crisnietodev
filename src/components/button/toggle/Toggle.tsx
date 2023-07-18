"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "../toggle/Toggle.module.css";

const ToggleButton = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme || "dark");
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setActiveTheme(inactiveTheme)}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
    >
      <span
        aria-hidden={true}
        className={cx(styles.toggleThumb, {
          [styles.isDark]: activeTheme === "dark",
        })}
      ></span>
    </button>
  );
};

export default ToggleButton;
