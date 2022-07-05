import React from "react";
import laptop_logo from "../../assets/secure_laptop.png";
import psw_strength_logo from "../../assets/secure.png";
import styles from "./sections.module.css";

export default function Sections() {
  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.logo}>
          <img src={laptop_logo} alt="secure laptop logo" />
        </div>
        <div className={styles.text}>
          <h1> What is a password generator?</h1>
          <p>
            A password generator is a tool that automatically generates strong,
            secure passwords. With its help, you don’t need to come up with your
            own passwords ever again.
          </p>
          <p>
            A single mouse click will generate you a sequence of random symbols.
            Copy and use it as a password for your device, email, social media
            account, or anything else that requires restricted access.
          </p>
          <p>
            Also, don’t use the same password for more than one account. Each
            time you need to sign up, create a new password using this free
            password generator. In this way, your data will be safer than ever
            before.
          </p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.text2}>
          <h1> How does our password generator tool work?</h1>
          <p>
            To create a truly unique character combination, this online password
            generator tool goes through random sequences of 26 uppercase
            letters, 26 lowercase letters, 10 numeric digits, and 32 special
            symbols. The result is a unique 12-character sequence. This number
            of characters makes your future password downright unbreakable,
            taking 1.4 billion years for a brute-force attack to crack it.
          </p>
          <p>
            This free password generator is compatible with Windows, Linux, and
            Mac operating systems, as well as with Android and iOS devices.
          </p>
        </div>
        <div className={styles.logo2}>
          <img src={psw_strength_logo} alt="password strength logo" />
        </div>
      </div>
    </div>
  );
}
