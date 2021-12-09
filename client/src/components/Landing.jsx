import React from "react";

import { Link } from "react-router-dom";
import styles from "../css_modules/Landing.module.css";
import '../css/estilos.css';
import '../css/cinco.css';
import '../css/style_m.css';
 import svgCardBack from '../assets/plat_win.svg';
import svgCardBackPlay from '../assets/plat_play.svg';
import svgCardBackEx from '../assets/plat_ex.svg';
import svgCardBackNin from '../assets/plat_nin.svg';
import svgCardBackMac from '../assets/plat_mac.svg';
import '../helpers/script.js';
import back from '../img/back.png';
export default function Landing() {
  return (
    <div className="loading" style={{backgroundColor:'black',height:'600px'}} >
  
  
   
       
       <Link to={'/videogames/'} >
          <button className="boton cinco">
            <div className="icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                        
             </div>

              <span>

              Enter
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={svgCardBack} className="svgCardBack" alt="Not found" style={{width:'50px'}} />
              <img src={svgCardBackPlay} className="svgCardBackPlay" alt="Not found" style={{width:'40px'}}/>
              <img src={svgCardBackEx} className="svgCardBack" alt="Not found" style={{width:'50px'}}/>
              <img src={svgCardBackNin} className="svgCardBackPlay" alt="Not found" style={{width:'40px'}}/>
              <img src={svgCardBackMac} className="svgCardBack" alt="Not found" style={{width:'50px'}}/>
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              Video Games
              <br/>
              </span>
              <br/>

         </button>
         </Link> 
     
      
     
   
 <br/><br/><br/><br/><br/>
 <h1 style={{marginLeft:'500px'}} >let's play memory</h1>
      <main className="board-game">
    
        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="Back" />
            </div>
        </figure>

        <figure>
            <img className="back" src={back} alt="Back" />
            <div className="searched-image">
                <img src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg" alt="Back" />
            </div>
        </figure>
        
    </main>
     <article style={{width:'55%',marginLeft:'310px'}}>
        <Link to={'/videogames/'}  >
          <button className="boton ">
             

              <span>

              Enter
       
               
              </span>
               
         </button>
         </Link> 

      </article>
    </div>
  );
}
// <Link to="/videogames" className="boton 5">
        
//           Enter
         
//       </Link>

