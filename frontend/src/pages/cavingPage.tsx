import React from "react";
import NavBar from "../components/navBar";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";
import CavingBanner from "../components/cavingBanner";


export default function CavingPage() {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="flex align-center h-screen">
                <CavingBanner/>
            </div>
            <div className="m-10 mt-10">
                <EquipmentCarousel/>
            </div>
            <Footer/>
        </div>
    );
}
