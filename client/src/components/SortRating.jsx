import { useState } from "react";
import styles from "../css_modules/SortRating.module.css";
import '../css/estilos.css';
import '../css/cinco.css';
export default function SortRating({ onRating, ratings }) {
  let [btnAZ, setBtnAZ] = useState(0);
  let [btnZA, setBtnZA] = useState(0);

  function onChangeHandler(e) {
    if (e.target.value === "ASC") {
      if (!btnAZ) {
        onRating(e.target.value);
        setBtnAZ(1);
        setBtnZA(0);
      } else {
        onRating("");
        setBtnAZ(0);
      }
    } else if (e.target.value === "DESC") {
      if (!btnZA || btnAZ) {
        onRating(e.target.value);
        setBtnZA(1);
        setBtnAZ(0);
      } else {
        onRating("");
        setBtnZA(0);
      }
    }
  }

  return (
      <div className={`${styles.container}`}>
  <table>
    <tr>
      <td>
        <span className={`${styles.btn_span}`}>&nbsp; Raiting &nbsp;</span>
      </td>
      <td>    
          <button
            value="ASC"
            onClick={onChangeHandler}
            className={`${
              btnAZ && ratings ? styles.btn_rate_active : styles.btn_rate
            } boton cinco`}

          >
           ▲
          </button>
       </td>
       <td>   
            <button
              value="DESC"
              onClick={onChangeHandler}
              className={`${
                btnZA && ratings ? styles.btn_rate_active : styles.btn_rate
              } boton cinco`}

            >
              ▼
            </button>
        </td>
      </tr>
    </table>        
    </div>
  );
}
    // <div className="cont">
    // <table>
    //    <tr>
    //    <td>
    //       <button  className="boton cinco" >&nbsp;Raiting&nbsp;</button>
    //    </td>
    //    <td>
    //   <button
        
    //     value="ASC"
    //     onClick={onChangeHandler}
    //             className="boton cinco"
    //     style={btnAZ && ratings ?{backgroundColor:'white',color:'black'}:{color:'white'}}
    //   >
    //     ▲
    //   </button>
    //   </td>
    //   <td>
    //   <button
    //     value="DESC"
    //     onClick={onChangeHandler}
    //            className="boton cinco"
    //     style={btnAZ && ratings ?{backgroundColor:'white',color:'black'}:{color:'white'}}
    //   >
    //    ▼
    //   </button>
    //   </td>
    //   </tr>
    //   </table>
    // </div>