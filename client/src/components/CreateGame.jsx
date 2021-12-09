import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createGame, getGenres, getVids } from "../actions/index.js";
import styles from "../css_modules/Create.module.css";
import Menu from "./Menu";
import '../css/estilos.css';
import '../css/cinco.css';
export default function CreateGame() {
  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const api = useSelector((state) => state.apiList);
  const allPlatforms = api.map((elem) => elem.platforms);
  let platformsSet = new Set(allPlatforms.flat(Infinity));
  let platforms = [...platformsSet];
  let errors = {};
  let [checkState, setCheckState] = useState({
    genres: new Array(genres.length).fill(false),
    platforms: new Array(platforms.length).fill(false),
  });
  let [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    genres: [],
    rating: 0,
    platforms: [],
  });
  let [error, setError] = useState({
    name: "Name required",
    description: "Description required",
    released: "Date required",
    genres: "Genre required",
    platforms: "Platform required",
    rating: "Rating must be higher than zero",
  });

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getVids());
  }, [dispatch]);

  function validate(input) {
    // console.log("validate");
    // console.log(input);
    if (input.name) {
      errors.name = "";
    } else {
      errors.name = "Name required";
    }
    if (input.description) {
      errors.description = "";
    } else {
      errors.description = "Description required";
    }
    if (input.released) {
      errors.released = "";
    } else {
      errors.released = "Date required";
    }
    if (input.rating > 0) {
      errors.rating = "";
    } else {
      errors.rating = "Rating required";
    }
    if (input.genres.length > 0) {
      errors.genres = "";
    } else {
      errors.genres = "Genre required";
    }
    if (input.platforms.length > 0) {
      errors.platforms = "";
    } else {
      errors.platforms = "Platform required";
    }
    return errors;
  }
 

  function handleGenre(e,pos,name) {
 
       
          if(!e.target.checked){
            let nameDelete=e.target.value;
         
       setCheckState({...checkState, genres:checkState.genres.filter(name => name !== nameDelete)});
        setInput({ ...input, genres:input.genres.filter(name => name !== nameDelete) });    
       setError(validate({ ...input, genres:input.genres.filter(name => name !== nameDelete) }));  
          }else {setCheckState({ ...checkState, genres:[...checkState.genres,name]});
         setInput({ ...input, genres:[...input.genres,name] });
         setError(validate({ ...input, genres: checkState.genres }));}

  }

  function handlePlatform(e,pos,name) {
    if(!e.target.checked){
            let nameDelete=e.target.value;
         
       setCheckState({...checkState, platforms:checkState.platforms.filter(name => name !== nameDelete)});
        setInput({ ...input, platforms:input.platforms.filter(name => name !== nameDelete) });    
       setError(validate({ ...input, platforms:input.platforms.filter(name => name !== nameDelete) }));  
          }else { setCheckState({ ...checkState, platforms:[...checkState.platforms,name]});
          setInput({ ...input, platforms:[...input.platforms,name] });
          setError(validate({ ...input, platforms: checkState.platforms }));
      }
  }

  function handleInput(e) {
  
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
     
    let checkObj = Object.values(error);
    let checkArr = checkObj.filter((elem) => elem !== "");
 
   
    

    if (checkArr.length > 0) {
      alert("Please fill in the required fields");
    } else {
      let newGame = {
        name: input.name,
        description: input.description,
        released: input.released,
        image:input.image,
        rating: input.rating,
        platforms: input.platforms,
        genres: input.genres,
      };
      
      dispatch(createGame(newGame));
      history.push("/videogames");
    }
  }
  return (
    <div className={`${styles.macro}`}>
    <Menu />
      <form   onSubmit={(e)=>onSubmit(e)}>
        <div className={`${styles.inputText}`}>     

                 

                     
                    <label >Released
         {!input.released?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:<small></small>}
                  

                    </label>
                    
                      <input
                        type="date"
                        name="released"
                        value={input.released}
                        onChange={handleInput}
                        className={`${error.released ? styles.error : styles.valid} ${
                          styles.date
                        }`}
                      />

                       <label >Rating         
                          {input.rating==='0'?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:input.rating===0?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:<small></small>}
                       </label>
                     
                      <input
                        type="number"
                        name="rating"
                        value={input.rating}
                        onChange={handleInput}
                        min="0"
                        max="5"
                        className={`${error.rating ? styles.error : styles.valid} ${
                          styles.rate
                        }`}
                      />
                    <label >Name
                          {!input.name?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:<small></small>}
                    </label>
                   
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInput}
                          placeholder="Ingresa el nombre del juego"
                          autoomplete="off"
                        className={`${error.name ? styles.error : styles.valid} ${
                          styles.name
                        }`}
                    />
               
                      <label >Image 
                          {!input.image?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:<small></small>}
                    </label>
                   
                      <input
                        type="text"
                        name="image"
                        value={input.image}
                        onChange={handleInput}
                          placeholder="Ingresa un link de la imagen"
                          autoomplete="off"
                        className={`${error.name ? styles.error : styles.valid} ${
                          styles.name
                        }`}
                    />
                      
                
                              
                    <label >Description
        {!input.description?<small style={{color:'red',fontSize:'15px'}}>&nbsp;Required</small>:<small></small>}
                    </label>
                   
                      <textarea
                        name="description"
                        value={input.description}
                        onChange={handleInput}
                        className={`${input.description? styles.error : styles.valid} ${
                          styles.desc
                        }`}
                      />
              
                
      
        </div>

          <br/>
         
       
              <label>Genre</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <label className={`${input.genres.length===0 ? styles.errorMsg : styles.errorMsgHide}`}>Genre required</label>
          <br/>
          <br/>
      <div className={styles.checkGenre}>
  
       
        
            {genres.map((elem, index) => (

             < >
              <label >
               
                {elem.name==="Massively Multiplayer"?"Multiplayer":elem.name==="Board Games"?"Board":elem.name}
                  </label>
                <input
                  key={elem + index}
                  type="checkbox"
                  name="genreBox"
                  value={elem.name}
                  onChange={(e) =>{ handleGenre(e,index,elem.name)}}
                  
                />
            </> 
            ))}
        

        </div>
 
<br/>
         
   
        <label >Platforms</label>

             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
               <label className={`${input.platforms.length===0  ? styles.errorMsg : styles.errorMsgHide}`}>Platform required</label>
          <br/>
      <br/>
        <div className={styles.checkPlatform} >
             
                {platforms.map((elem, index) => (
                  <>
                     <label>
                        {elem}
                      </label>  
                        <input
                          key={elem + index}
                           
                          type="checkbox"
                          name={elem}
                          value={elem}
                          onChange={(e) => {handlePlatform(e,index,elem)}}
                        
                        />
                    </>  
                ))}
      
           
        </div>
      
 
        <button type="submit" className="boton cinco">
          Create Game
        </button>
      </form>
      <br/>
      
    </div>
  );
}
