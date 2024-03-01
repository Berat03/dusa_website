import React from "react";
import ParallaxComposition from "../components/parallaxComposition";
import ClubStats from "../components/clubStats";
import Footer from "../components/footer";
import ImageTilesHalfPageText from "../components/imageTilesHalfPageText";
import ScrollNavBar from "../components/scrollNavBar";
import ImageGridDescription from "../components/imageGridDescription";

// style={{backgroundColor:'rgb(10,20,28)'}}
export default function HomePage() {
    return (
        <div className="flex flex-col ">
            <div className="sticky top-0 w-full z-50 ">
                <ScrollNavBar/>
            </div>
            <div className="h-screen">
                <ParallaxComposition/>
            </div>
            <div>
                <ImageGridDescription/>
            </div>
            <div className="mb-72 sm:mb-48 md:mb-0">
                <ClubStats/>
            </div>
            <div >
                <ImageTilesHalfPageText/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}
