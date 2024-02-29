import React from "react";
import NavBar from "../components/navBar";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";
import CavingBanner from "../components/cavingBanner";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";
import Img from "../assets/me_stuck.jpg"
import ScrollNavBar from "../components/ScrollNavBar";

export default function CavingPage() {
    return (
        <div className="w-full bg-orange-900">
            <div className="z-50">
                <ScrollNavBar/>
            </div>
            <div className="h-screen">
                <CavingBanner/>
            </div>
            <div className="h-5/6">
                <EquipmentCarousel/>
            </div>
            <div>
                <ImageBgOverlapTextFull title={"We are active weekly!"} image={Img}
                                        description={"blah blah brkrbn about caving b lorem upsum stuff lah blabh ablaegjeafnjef"}/>
            </div>
            <Footer/>
        </div>
    );
}
