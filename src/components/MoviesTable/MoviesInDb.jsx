import React from "react";
import './moviesTable.css';

function MoviesInDb (props) {
    return (
        <ul className='moviesTableGridRows'>
            <li>{props.titulo}</li>
            <li>{props.lenght}</li>
            <li>{props.rating}</li>
            <li>{props.genres}</li>
            <li>{props.awards}</li>
        </ul>
    
    )
}


export default MoviesInDb;
