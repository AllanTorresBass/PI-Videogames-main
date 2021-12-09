 
import { Link } from "react-router-dom";
 
 
import '../css/estilos.css';
 
import '../css/cinco.css';
 
export default function Menu() {
 
  return (
 

  <div className="contenedor">
  
    <div className="contenedor-botones">
       
       <Link to={'/videogames/'} >
          <button className="boton cinco">
            <div className="icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                        
             </div>
              <span>Video Games</span>

         </button>
         </Link> 
       <Link to={'/create'} >
     <button className="boton cinco">
            <div className="icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
                        
            </div>
              <span>Crear Juego</span>

         </button>
       </Link> 
       <Link to={'/'} > 
          <button className="boton cinco">
            <div className="icono">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
                        
            </div>
              <span>Principal</span>

         </button>
       </Link> 
    </div>
  </div>
 
  );
}