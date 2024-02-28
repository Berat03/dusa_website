import React from "react";
import NavBar from "../components/navBar";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";
import CavingBanner from "../components/cavingBanner";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";
import Img from "../assets/me_stuck.jpg"

export default function CavingPage() {
    return (
        <div className="flex flex-col w-full bg-range-900">
                <NavBar/>
            <div className="flex align-center h-screen">
                <CavingBanner/>
            </div>
            <div className="">
                <EquipmentCarousel/>
            </div>
            <div>
                <ImageBgOverlapTextFull title={"We are active weekly!"} image={Img} description={"blah blah brkrbn about caving blah blabh ablaegjeafnjef"}/>
            </div>
            <Footer/>
        </div>
    );
}
