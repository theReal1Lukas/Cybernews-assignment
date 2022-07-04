import { useEffect, useState } from "react";
import styles from "./passwordGenerator.module.css";
import arrow from "../../assets/refresh-arrow.png";

const PSW_CHAR = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  characters: "!#$%&'" + '"()*+,-./:;<=>?@[]^_`{|}~\\',
};
export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(PSW_CHAR.upper);
  const [lowerCase, setLowerCase] = useState(PSW_CHAR.lower);
  const [digits, setDigits] = useState(PSW_CHAR.numbers);
  const [symbols, setSymbols] = useState(PSW_CHAR.characters);
  const filters = ["lower case", "upper case", "special symbols", "numbers"];
  const [activeFilters, setActiveFilters] = useState({
    filterName: "",
    filterState: false,
  });

  //handle filters
  useEffect(() => {
    if (activeFilters.filterState === true) {
      if (activeFilters.filterName === "lowercase") {
        setLowerCase("");
      }
      if (activeFilters.filterName === "uppercase") {
        setUpperCase("");
      }
      if (activeFilters.filterName === "digits") {
        setDigits("");
      }
      if (activeFilters.filterName === "specialChar") {
        setSymbols("");
      }
    } else if (activeFilters.filterState === false) {
      setUpperCase(PSW_CHAR.upper);
      setLowerCase(PSW_CHAR.lower);
      setDigits(PSW_CHAR.numbers);
      setSymbols(PSW_CHAR.characters);
    }
  }, [activeFilters]);
  function handleGenerator() {
    const str = upperCase + symbols + lowerCase + digits;
    let pass = "";

    for (let i = 1; i <= 20; i++) {
      const rndm = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(rndm);
    }
    setPassword(pass);
  }

  useEffect(() => {
    handleGenerator();
  }, []);

  const handleCopyPassword = () => {
    const psw = document.getElementById("psw-input").value;
    navigator.clipboard
      .writeText(psw)
      .then(console.log("Password copied sucessfully"));
  };
  return (
    <div className={styles["password_generator"]}>
      <div className={styles["password_generator__texts"]}>
        <h1 className={styles.text}>Generate strong passwords</h1>
        <p className={styles.text}>
          Upgrade the security of your online accounts.
        </p>
        <p className={styles.text}>
          Create strong passwords that are completely random and impossible to
          guess.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          id="psw-input"
          className={styles["password_input"]}
          defaultValue={password}
        />
        <button className={styles["copy_btn"]} onClick={handleCopyPassword}>
          Copy Password
        </button>
        <button
          style={{
            background: "inherit",
            border: "none",
            borderRadius: "10px",
            right: "250px",
            top: "0px",
            position: "relative",
          }}
          onClick={handleGenerator}
        >
          <img
            className={styles["arrow_btn"]}
            src={arrow}
            alt="arrow image for password refresh"
          />
        </button>{" "}
      </div>

      <br />
      <div className={styles.filters}>
        <div className={styles.filter}>
          <input
            className={styles.checkbox}
            checked={
              activeFilters.filterName === "lowercase" &&
              activeFilters.filterState
            }
            type="checkbox"
            name="only-lower"
            onChange={() =>
              setActiveFilters({
                filterName: "lowercase",
                filterState: !activeFilters.filterState,
              })
            }
          />
          <label htmlFor="only-lower"> lowercase</label>
        </div>
        <div className={styles.filter}>
          <input
            className={styles.checkbox}
            checked={
              activeFilters.filterName === "uppercase" &&
              activeFilters.filterState
            }
            type="checkbox"
            name="only-upper"
            onChange={() =>
              setActiveFilters({
                filterName: "uppercase",
                filterState: !activeFilters.filterState,
              })
            }
          />
          <label htmlFor="only-upper"> uppercase</label>
        </div>
        <div className={styles.filter}>
          <input
            className={styles.checkbox}
            checked={
              activeFilters.filterName === "digits" && activeFilters.filterState
            }
            type="checkbox"
            name="only-digits"
            onChange={() =>
              setActiveFilters({
                filterName: "digits",
                filterState: !activeFilters.filterState,
              })
            }
          />
          <label htmlFor="only-digits"> digits</label>
        </div>
        <div className={styles.filter}>
          <input
            className={styles.checkbox}
            checked={
              activeFilters.filterName === "specialChar" &&
              activeFilters.filterState
            }
            type="checkbox"
            name="only-special_char"
            onChange={() =>
              setActiveFilters({
                filterName: "specialChar",
                filterState: !activeFilters.filterState,
              })
            }
          />
          <label htmlFor="only-special_char"> special</label>
        </div>
      </div>
    </div>
  );
}
