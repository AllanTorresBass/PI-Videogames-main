import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { getDetails } from "../actions/index.js";
import Menu from "./Menu";
 
import '../css/estilos.css';
 
import '../css/cinco.css';
 
export default function Detail({ id }) {
  let details = useSelector((state) => state.details);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (

    <div className="divConx">

                    <Menu />
  

     <div className="displayD">
       <div>
           <img  
           s src={
              details.image
                ? details.image
                : "https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg"
            } 

           alt="Not Found" />
          <div  ><h2 style={{fontSize:'30px', textAlign:'center',color:'white',borderBottom:'solid #d90062 1px',marginTop:'10px'}}> {details.name}</h2></div>
      </div>
           <div className="itemD">
       
                <div  ><h3 style={{borderBottom:'solid #d90062 1px',marginLeft: '10px'}}> {details.genres}</h3></div>
                <div  ><h3 style={{borderBottom:'solid #d90062 1px',marginLeft: '10px'}}>Rating: {details.rating}</h3></div>
                <div  ><h3 style={{borderBottom:'solid #d90062 1px',marginLeft: '10px'}}>Released: {details.released}</h3></div>
                 <div  ><h3 style={{borderBottom:'solid #d90062 1px',marginLeft: '10px'}}>{details.platforms}</h3></div>
                <div  ><h3 style={{marginLeft: '10px'}}>{details.description}</h3></div>
               

          </div>
      </div>


    </div>
  );
}

 