 
 import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index.js";
import styles from "../css_modules/Videogame.module.css";
import '../css/card.style.css';
import '../css/cardMyVideo.style.css';
import '../css/style.css';
 import {useHistory} from "react-router";
import svgCardBack from '../assets/plat_win.svg';
//import loading from '../assets/loading.gif';
import svgCardBackPlay from '../assets/plat_play.svg';
import svgCardBackEx from '../assets/plat_ex.svg';
import svgCardBackNin from '../assets/plat_nin.svg';
import svgCardBackMac from '../assets/plat_mac.svg';
import {LinkTrailer} from '../helpers/LinkTrailers';
import {LinkYoutube} from '../helpers/LinkYoutube';

 
var ex=""
export default function Videogame({x,y,idX,released,description,platforms, i,name, image, genres, id, rating }) {
  let details = useSelector((state) => state.details);
  let dispatch = useDispatch();
  let history = useHistory();
 // let iX = document.querySelector("#"+i);
 // console.log(iX.value)
//console.log(idX)
     //  {<Link to={`/videogames/$idX[i]}`} className={`${styles.link}`}> {idX[14]} - {idX.length} - {details.name}/></Link>
   const handleDetails=()=>{
     
       history.push("/videogames/"+ex);
   }
     var handleId = (id) =>
 {
    ex=id;
dispatch(getDetails(id));
      
    }
 

  let PC=false;
  let Play=false;
  let mac=false;
  let Xbox=false;
  let Nintendo=false;
  let vacia="";
   
   platforms.map((e)=>{
    if(e.includes('PC')){PC = e.includes('PC');}
    if(e.includes('Play')){Play = e.includes('Play');}
    if(e.includes('Xbox')){Xbox = e.includes('Xbox');}
    if(e.includes('mac')){mac = e.includes('mac');}
    if(e.includes('Nintendo')){Nintendo = e.includes('Nintendo');}
    return true
     
   });
  
  const handlePlay = (i)=>{
    let myVideo = document.querySelector("#myVideo"+i);
    myVideo.play();
  }
  const handlePause = ()=>{
  
    let myVideo = document.querySelector("#myVideo"+i);
    myVideo.pause();
  }
  const handleYoutube = ()=>{
  let vidYoutube = document.getElementById("vidYoutube");
    vidYoutube.src=LinkTrailer[x+i].url;
  }
  const handleCerrarYoutube = ()=>{
    
   let vidYoutube = document.getElementById("vidYoutube");
    vidYoutube.src='';
  }
  
  return (
     <div className={`${styles.master}`}> 
    <section >
    <div >
   
      <a href="#trabajo-1" className="portfolio-card" onClick={()=>handleId(id)}>
      <article  className="portfolio-card-back"> 
      <div> 
      <img style={{width: '100%', height: '50%',}}
             
            src={
              image
                ? image
                : "https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg"
            }
            alt="Not found"
          />
            <h4 style={{textAlign: 'center'}}>{name}</h4>
            {PC?<img src={svgCardBack} className="svgCardBack" alt="Not found" />:vacia}
           {Play?<img src={svgCardBackPlay} className="svgCardBackPlay" alt="Not found"/>:vacia}
           {Xbox?<img src={svgCardBackEx} className="svgCardBack" alt="Not found"/>:vacia}
           {Nintendo?<img src={svgCardBackNin} className="svgCardBackPlay" alt="Not found"/>:vacia}
           {mac?<img src={svgCardBackMac} className="svgCardBack" alt="Not found"/>:vacia}
           <p className="CardBackp"><b>Rating:  {rating}</b></p>
           <p className="CardBackp"><b>Genre: {genres.map((elem) => elem.name).join(" / ")} </b></p>
            
        </div>   
      </article>   
      <aside id="initVideo" onMouseEnter={()=>handlePlay(i)} onMouseLeave={handlePause} onClick={handleYoutube}  className="portfolio-card-info box-shadow-1">
          <div >
            <video    id={`myVideo${i}`}
            style={{width: '100%', height: '55%',}}
             src={LinkTrailer[x+i].url}
             controls="controls" 
             
             muted="muted" 
             loop> Vídeo no es soportado... </video>
            
            <h5 style={{textAlign: 'center'}}>{name}</h5>
            {PC?<img src={svgCardBack} className="svgCardBack" alt="Not found" />:vacia}
           {Play?<img src={svgCardBackPlay} className="svgCardBackPlay" alt="Not found"/>:vacia}
           {Xbox?<img src={svgCardBackEx} className="svgCardBack" alt="Not found"/>:vacia}
           {Nintendo?<img src={svgCardBackNin} className="svgCardBackPlay" alt="Not found"/>:vacia}
           {mac?<img src={svgCardBackMac} className="svgCardBack" alt="Not found"/>:vacia}
           <p className="CardBackp"><b>Rating:  {rating}</b></p>
           <p className="CardBackp"><b>Genre: {genres.map((elem) => elem.name).join(" / ")} </b></p>
            
       
         </div>
        </aside>  
      </a>
      </div>
    
    </section>
     <article className="modal" id="trabajo-1">
     
     <div className="modal-content ">
       <a href="#cerrar" className="modal-close" id="cerrar" onClick={handleCerrarYoutube}>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
           <path
             d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
         </svg>
       </a>
       <article className="portfolio-modal box-shadow-1">
         
         <iframe id="vidYoutube"
         width="600"
          height="400" 
          src={LinkYoutube[x+i].url}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer"
          
          clipboardwrite="true"
          encryptedmedia="true"
          gyroscope="true"
          pictureinpicture="true"
          allowFullScreen></iframe>
 
         <div className="portfolio-info">
        
           <h3 onClick={()=>handleDetails(id)}>
          
      
            {details.name} 
           </h3>
         
             <textarea className="textareaModal" value={details.description} disabled>
                       
           </textarea>
             <aside className="portfolio-details">
             <h4><b>Raiting:</b>&nbsp;&nbsp; {details.rating}</h4>
             
             <h4><b>Release date:</b>&nbsp;&nbsp; {details.released}</h4>
            
              
           
             <h4><b>Platforms:</b>&nbsp;&nbsp;{details.platforms}</h4>
             <h4><b>Genre:</b>&nbsp;&nbsp;{details.genres}</h4>
              
             
           </aside>
         </div>
       </article>
     </div>
   </article>
 
      {/* <Link to={`/videogames/${id}`} className={`${styles.link}`}>
        <div className={`${styles.box}`}>
          <img
            className={`${styles.img}`}
            src={
              image
                ? image
                : "https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg"
            }
            alt="Not found"
          />
          <div className={`${styles.details}`}>{name}</div>
          <div className={`${styles.genrate}`}>
            <div className={`${styles.content}`}>
              {genres.map((elem) => elem.name).join(" / ")}
            </div>
            <div className={`${styles.content}`}>Rating: {rating}</div>
          </div>
        </div>
      </Link> */}
    </div>
  );
}
