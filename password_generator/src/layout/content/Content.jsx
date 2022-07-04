import React from "react";
import styles from "./content.module.css";
import PasswordGenerator from "../../components/passwordGenerator/PasswordGenerator";
import WhatIsPaswordGen from "../../components/whatIsPaswordGenerator/WhatIsPaswordGen";

export default function Content() {
  return (
    <div className={styles.content}>
      <PasswordGenerator />
      <WhatIsPaswordGen />
    </div>
  );
}
