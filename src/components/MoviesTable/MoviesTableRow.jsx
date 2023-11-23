import React, {Component} from "react";
import MoviesInDb from "../../components/MoviesTable/MoviesInDb";
import './moviesTable.css'



class MoviesTableRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            moviesInDb: []
        }
    }

    componentDidMount() {
        fetch('/api/movies')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(data => {
            this.setState({moviesInDb: data.data})
        })
    }

    render () {
        return (
            this.state.moviesInDb.map( (movie, i) => <MoviesInDb key={movie + i} {...movie} />)   
            
        )
    }    

    }


export default MoviesTableRow;
