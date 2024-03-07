import React from "react";
import ParallaxComposition from "../components/parallaxComposition";
import ClubStats from "../components/clubStats";
import Footer from "../components/footer";
import ImageTilesHalfPageText from "../components/imageTilesHalfPageText";
import ScrollNavBar from "../components/scrollNavBar";
import ImageGridDescription from "../components/imageGridDescription";
import SplitImageRight from "../components/splitImageRight";
import TripleImage from "../components/tripleImage";
import OurTeam from "../components/ourTeam";

// style={{backgroundColor:'rgb(10,20,28)'}}
export default function HomePage() {
    return (
        <div className="flex flex-col" style={{backgroundColor: 'rgb(10,20,28)'}}>
            <div className="sticky top-0 w-full z-50 ">
                <ScrollNavBar/>
            </div>
            <div className="h-screen -mt-36">
                <ParallaxComposition/>
            </div>
            <ImageGridDescription/>


            <div className="">
                <ClubStats/>
            </div>
                        <TripleImage/>

            <div className="relative sm:mt-5" style={{backgroundColor: 'rgb(10,20,28)'}}>
                <ImageTilesHalfPageText/>
            </div>
            <SplitImageRight/>

            <OurTeam/>

            <Footer/>
        </div>
    );
}
