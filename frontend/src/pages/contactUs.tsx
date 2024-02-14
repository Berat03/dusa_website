import NavBar from "../components/navBar";
import React from "react";
import ContactLinks from "../components/contactLinks";

export default function ContactUs(){
    return (
      <div className="bg-yellow-800 h-screen">
        <div>
            <NavBar/>
        </div>
          <ContactLinks/>
      </div>
    )
}