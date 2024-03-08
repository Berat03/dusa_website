import React from "react";
import ParallaxComposition from "../components/home/parallaxComposition";
import ClubStats from "../components/home/clubStats";
import Footer from "../components/repeats/footer";
import ImageTilesHalfPageText from "../components/imageTilesHalfPageText";
import ScrollNavBar from "../components/repeats/scrollNavBar";
import ImageGridDescription from "../components/home/imageGridDescription";
import SplitImageRight from "../components/home/splitImageRight";
import TripleImage from "../components/home/tripleImage";
import OurTeam from "../components/home/ourTeam";

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


            <div className="mb-32 sm:mb-0">
                <ClubStats/>
            </div>
            <TripleImage/>
            <div className="bg-custom_bg relative sm:mt-5">
                <ImageTilesHalfPageText/>
            </div>
            <SplitImageRight/>

            <OurTeam/>

            <Footer/>
        </div>
    );
}
