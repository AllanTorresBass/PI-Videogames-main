import Videogame from "./Videogame.jsx";
import styles from "../css_modules/VideogameList.module.css";

export default function VideogameList({ vids, vars }) {
  //console.log(vars[0],vars[1])
  //vids es la data
   //vars => variables de paginación
    var idX=[];
  return (
    <div className={`${styles.macro}`}>
      <div className={`${styles.container}`}>
        {vids.slice(vars[0], vars[1]).map((elem, index) => {
          if (elem.name !== "Videogame not found") {
            idX.push(elem.id);
            return (
              <Videogame
                key={index}
                id={elem.id}
                name={elem.name}
                image={elem.image}
                genres={elem.genres}
                rating={elem.rating}
                platforms={elem.platforms}
                description={elem.description}
                released={elem.released}
                i={index}
                idX={idX}
                x={vars[0]}
                y={vars[1]}
              />
            );
          } else {
            return (
              <div>
                <h1 className={`${styles.error}`}>GAME OVER</h1>
                <h3 className={`${styles.error}`}>videogame not found</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
