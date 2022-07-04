import { useEffect, useState } from "react";

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
    <div className="App">
      <p>Password Generator </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          id="psw-input"
          style={{ width: "80%", padding: "10px", fontSize: "20px" }}
          defaultValue={password}
        />
        <button
          style={{
            background: "inherit",
            border: "none",
            borderRadius: "10px",
            right: "50px",
            top: "0px",
            position: "relative",
          }}
          onClick={handleGenerator}
        >
          &gt; &gt;
        </button>{" "}
        <button onClick={handleCopyPassword}>Copy</button>
      </div>

      <br />
      <input
        checked={
          activeFilters.filterName === "lowercase" && activeFilters.filterState
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
      <input
        checked={
          activeFilters.filterName === "uppercase" && activeFilters.filterState
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
      <input
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
      <input
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
  );
}
