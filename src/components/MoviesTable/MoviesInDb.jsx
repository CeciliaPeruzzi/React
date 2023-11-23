import React from "react";
import './moviesTable.css';

function MoviesInDb (props) {
    return (
        <ul className='moviesTableGridRows'>
            <li>{props.title}</li>
            <li>lenght</li>
            <li>{props.rating}</li>
            <li>{props.genre ? props.genre.name : 'Sin Género'}</li>
            <li>{props.awards}</li>
        </ul>
    
    )
}


export default MoviesInDb;
