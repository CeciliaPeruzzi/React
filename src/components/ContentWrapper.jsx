import React from "react";
import TopBar from "../components/TopBar";
import ContentRowTop from "../components/ContentRowTop";
import Footer from "../components/Footer";
import MoviesTable from "../components/MoviesTable/MoviesTable";


function ContentWrapper () {
    return (
        
		<div id="content-wrapper" class="d-flex flex-column">

			
			<div id="content">

			<TopBar/>
			<ContentRowTop/>
				
			</div>
			<MoviesTable/>
			<Footer/>

		</div>
        
    )
}

export default ContentWrapper;