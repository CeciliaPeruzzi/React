import React from "react";
import TopBar from "../components/TopBar";
import ContentRowTop from "../components/ContentRowTop";
import Footer from "../components/Footer";


function ContentWrapper () {
    return (
        <>
		
        {/*<!-- Content Wrapper -->*/}
		<div id="content-wrapper" class="d-flex flex-column">

			{/*<!-- Main Content -->*/}
			<div id="content">

			<TopBar/>
			<ContentRowTop/>
				
			</div>
			{/*<!-- End of MainContent -->*/}

			<Footer/>

		</div>
		{/*<!-- End of Content Wrapper -->*/}
        </>
    )
}

export default ContentWrapper;