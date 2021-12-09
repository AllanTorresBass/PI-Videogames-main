import { useState } from "react";
import styles from "../css_modules/DbDropdown.module.css";
import '../css/estilos.css';
import '../css/cinco.css';
export default function FilterDb({ onDb, db }) {
  let [value, setValue] = useState("");
  function onChangeHandler(e) {
    setValue(e.target.value);
    onDb(e.target.value);
  }

  return (
    <div className={`${styles.drop}`}>
      <button className={`${value && db ? styles.menu_active : styles.menu} boton cinco`}>
      &nbsp;  {value && db ? value : "Select DB"} &nbsp;
      </button>
      <div className={`${styles.select}`}>
        <button className={`${styles.btn} boton cinco`} value="" onClick={onChangeHandler}>
          All
        </button>
        <button
          className={`${styles.btn} boton cinco`}
          value="DB"
          onClick={onChangeHandler}
        >
          DB
        </button>
        <button
          className={`${styles.btn} boton cinco`}
          value="Rawg"
          onClick={onChangeHandler}
        >
          Rawg
        </button>
      </div>
    </div>
  );
}
