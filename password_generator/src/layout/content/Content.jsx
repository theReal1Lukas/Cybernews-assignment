import React from "react";
import styles from "./content.module.css";
import PasswordGenerator from "../../components/passwordGenerator/PasswordGenerator";
import Sections from "../../components/sections/Sections";

export default function Content() {
  return (
    <div className={styles.content}>
      <p className={styles.info_text}>
        Our readers help us create quality content. If you purchase via links on
        our site, we may receive affiliate commissions.{" "}
        <span>
          <a
            className={styles.link}
            href="https://cybernews.com/terms-conditions/#h-affiliate-links-advertising-disclosure"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </span>
      </p>
      <PasswordGenerator />
      <Sections />
    </div>
  );
}
