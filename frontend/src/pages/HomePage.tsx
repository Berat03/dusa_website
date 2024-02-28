import React from "react";
import ParallaxComposition from "../components/parallaxComposition";
import NavBar from "../components/navBar";
import ClubStats from "../components/clubStats";
import Footer from "../components/footer";
import ImageTilesHalfPageText from "../components/imageTilesHalfPageText";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";

// style={{backgroundColor:'rgb(10,20,28)'}}
export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-5">
            <div className="">
                <NavBar/>
            </div>
            <div className="h-screen">
                <ParallaxComposition/>
            </div>
            <div className="">
                <ClubStats/>
            </div>
            <div className="">
                <ImageTilesHalfPageText/>
            </div>
            <ImageBgOverlapTextFull/>
            <Footer/>
        </div>
    );
}
