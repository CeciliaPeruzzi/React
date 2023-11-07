import React from "react";
import  Cards  from "./Cards";
import  { cards }  from "../constants";


function ContentRowMovies () {
    return (
        
    <div className="row">
        
        
        {cards.map((card, i) => <Cards key={card + i} {...card}/>)}

    </div>    

    )



}


export default ContentRowMovies;
