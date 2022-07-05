import React from "react";
import styles from "./navigationBar.module.css";
import cyberNewsLogo from "../../assets/Vector.png";

export default function NavigationBar() {
  return (
    <div className={styles.nav}>
      <img
        className={styles.nav_logo}
        src={cyberNewsLogo}
        alt="cybernews-logo"
      />
    </div>
  );
}
