import React, { useState } from "react";
import styles from "../css_modules/Searchbar.module.css";
 
import lupa from '../img/lupa.svg';
import x from '../img/x.svg';
export default function Searchbar({
  onSearch,
  onSort,
  onFilterGen,
  onRating,
  onDb,
}) {
  let [input, setInput] = useState("");

  function changeHandler(e) {
    if (e.target.value.length > 0) {
      setInput(e.target.value);
    } else {

      setInput("");
      onSearch("");
      onSort("");
      onFilterGen("");
      onRating("");
      onDb("");
    }
  }

  function reset(e) {
    setInput("");
    onSearch("");
    onSort("");
    onFilterGen("");
    onRating("");
    onDb("");
  }

  function submitHandler(e) {
    // alert("cannot be empty");
var inputS = document.getElementById("myInput");

    e.preventDefault();
     // alert(e.target);
  
  
       if(inputS.value === "") {alert("cannot be empty"); return;}
    onSort("");
    onFilterGen("");
    onRating("");
    onDb("");
    onSearch(input);
  }

  return (
    <div className={`${styles.displaySearch}`}>
      <form className={`${styles.form}`} onSubmit={(e)=>submitHandler(e)}>
        <input
          id="myInput"
          name="search"
          className={`${styles.searchbar}`}
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder="Name of the Game"
        />
        <button className={`${styles.search_btn} boton cinco`} style={{width:'30px',height:'30px'}} type="submit">
          
          <img src={lupa}  alt="Not found"/>
          
        </button>
      
      </form>

        <button value="" className={`${styles.search_btn} boton cinco`} onClick={reset} style={{width:'20px',height:'30px'}}>
         
          <img src={x} alt="Not found"/>
     
        </button>

    </div>
  );
}
