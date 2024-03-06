import React from "react";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";
import CavingBanner from "../components/cavingBanner";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";
import ScrollNavBar from "../components/scrollNavBar";
import Example from "../components/hoverCard";

export default function CavingPage() {
    return (
        <div className="w-full bg-custom_bg">
            <div className="sticky top-0 z-50">
                <ScrollNavBar/>
            </div>
            <div className="h-screen bg-gradient-to-b to-custom_bg from-gray-800">
                <CavingBanner/>
            </div>
            <div className="h-5/6">
                <EquipmentCarousel/>
            </div>
            <div>
                <ImageBgOverlapTextFull title={"We are active weekly!"} image="https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/me_stuck-min.jpg"
                                        description={"blah blah brkrbn about caving b lorem upsum stuff lah blabh ablaegjeafnjef"}/>
            </div>
            <Example/>
            <Footer/>
        </div>
    );
}
