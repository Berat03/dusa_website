import React from "react";
import NavBar from "../components/navBar";
import EquipmentCarousel from "../components/equipmentCarousel";


export default function NewToCaving() {
  return (
      <div className="flex flex-col">
        <NavBar/>
          <div className="h-screen bg-red-900" >
            <EquipmentCarousel/>
          </div>
      </div>
  );
}
