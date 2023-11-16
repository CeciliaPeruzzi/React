import React from "react";
import MoviesTableRow from "./MoviesTableRow";

function MoviesTable () {
    return(
        <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <ul className='moviesTableGridHeader'>
                <li >Título</li> 
                <li>Duración</li> 
                <li>Rating</li> 
                <li>Género</li> 
                <li>Premios</li> 
              </ul>
              
              <MoviesTableRow />

                <ul className='moviesTableGridHeader'>
                <li>Título</li> 
                <li>Duración</li> 
                <li>Rating</li> 
                <li>Género</li> 
                <li>Premios</li> 
                </ul>
            </div>
        </div>  
    )
}



export default MoviesTable;

