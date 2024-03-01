import React from "react";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";
import CavingBanner from "../components/cavingBanner";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";
import Img from "../assets/me_stuck.jpg"
import ScrollNavBar from "../components/scrollNavBar";

export default function CavingPage() {
    return (
        <div className="w-full " style={{backgroundColor: 'rgb(10,20,28)'}}>
            <div className="sticky top-0 z-50">
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
