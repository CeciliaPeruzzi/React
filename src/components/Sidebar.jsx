import React from "react";
import image from "../assets/images/logo-DH.png";
import {Link, Route, Switch} from 'react-router-dom'
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";


function Sidebar () {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genreinDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres In Db</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastMovieIndb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last Movie In Db</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/contentRowMovie">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Content Row Movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            

        <Switch> 
            <Route path="/" exact={true}>

                <ContentWrapper/>

            </Route> 

            <Route path="/genreinDb" exact={true}>

                <GenresInDb/>

            </Route> 

            <Route path="/lastMovieIndb" exact={true}>

                <LastMovieInDb/>

            </Route> 

            <Route path="/contentRowMovie" exact={true}>

                <ContentRowMovies/>

            </Route>  
        </Switch>   
    
    </React.Fragment>

    )
}


export default Sidebar;
