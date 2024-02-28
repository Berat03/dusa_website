import React from "react";
import NavBar from "../components/navBar";
import EquipmentCarousel from "../components/equipmentCarousel";
import Footer from "../components/footer";


export default function CavingPage() {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="h-screen bg-red-900">
                <EquipmentCarousel/>
            </div>
            <Footer/>
        </div>
    );
}
