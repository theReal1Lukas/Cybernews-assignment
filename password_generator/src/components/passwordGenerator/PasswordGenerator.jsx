import { useEffect, useState } from "react";
import styles from "./passwordGenerator.module.css";
import arrow from "../../assets/refresh-arrow.png";
import Filters from "./Filters";

const PSW_CHAR = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  characters: "\"`!#$%&'()*+,-./:;<=>?@[]^_{|}~\\",
};
export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(PSW_CHAR.upper);
  const [lowerCase, setLowerCase] = useState(PSW_CHAR.lower);
  const [digits, setDigits] = useState(PSW_CHAR.numbers);
  const [symbols, setSymbols] = useState(PSW_CHAR.characters);

  const [lowFilter, setLowFilter] = useState(true);
  const [highFilter, setHighFilter] = useState(true);
  const [numFilter, setNumFilter] = useState(true);
  const [symFilter, setSymFilter] = useState(true);

  //check if filters active
  useEffect(() => {
    if (lowFilter === false) {
      setLowerCase("");
    } else if (lowFilter === true) {
      setLowerCase(PSW_CHAR.lower);
    }
    if (highFilter === false) {
      setUpperCase("");
    } else if (highFilter === true) {
      setUpperCase(PSW_CHAR.upper);
    }
    if (numFilter === false) {
      setDigits("");
    } else if (numFilter === true) {
      setDigits(PSW_CHAR.numbers);
    }
    if (symFilter === false) {
      setSymbols("");
    } else if (symFilter === true) {
      setSymbols(PSW_CHAR.characters);
    }
  }, [lowFilter, highFilter, numFilter, symFilter]);

  const handleGenerator = () => {
    const str = upperCase + symbols + lowerCase + digits;
    let pass = "";

    for (let i = 1; i <= 20; i++) {
      const rndm = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(rndm);
    }
    setPassword(pass);
  };

  window.onload = () => handleGenerator();

  const handleCopyPassword = () => {
    const psw = document.getElementById("psw-input").value;
    navigator.clipboard
      .writeText(psw)
      .then(console.log("Password copied sucessfully"));
  };

  return (
    <div className={styles.password_generator}>
      <div className={styles.password_generator_texts}>
        <h1 className={styles.text}>Generate strong passwords</h1>
        <p className={styles.text}>
          Upgrade the security of your online accounts.
        </p>
        <p className={styles.text}>
          Create strong passwords that are completely random and impossible to
          guess.
        </p>
      </div>

      <div className={styles.input_container}>
        <div className={styles.input}>
          <input
            id="psw-input"
            className={styles.password_input}
            defaultValue={
              lowFilter === false &&
              highFilter === false &&
              numFilter === false &&
              symFilter === false
                ? "Please select at least one filter"
                : password
            }
          />

          <button
            className={styles["input_btn--generate"]}
            onClick={handleGenerator}
          >
            <img className={styles.arrow_img} src={arrow} alt="arrow logo" />
          </button>
        </div>
        <button
          className={styles["input_btn--copy"]}
          onClick={handleCopyPassword}
        >
          Copy Password
        </button>
      </div>

      <Filters
        lowFilter={lowFilter}
        setLowFilter={setLowFilter}
        highFilter={highFilter}
        setHighFilter={setHighFilter}
        numFilter={numFilter}
        setNumFilter={setNumFilter}
        symFilter={symFilter}
        setSymFilter={setSymFilter}
      />
    </div>
  );
}
