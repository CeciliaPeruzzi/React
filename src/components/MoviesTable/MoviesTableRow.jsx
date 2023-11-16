import React from "react";
import  { moviesInDb }  from '../../constants'
import MoviesInDb from "../../components/MoviesTable/MoviesInDb";
import './moviesTable.css'

function MoviesTableRow () {
    return (
        
        moviesInDb.map( (movie, i) => <MoviesInDb key={movie + i} {...movie} />)
    

    )
}

export default MoviesTableRow;
