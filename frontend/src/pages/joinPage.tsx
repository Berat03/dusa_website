import NavBar from "../components/navBar";
import React from "react";
import ContactLinks from "../components/contactLinks";
import MailingList from "../components/mailingList";
import Footer from "../components/footer";

export default function JoinPage() {
    return (
        <div className="">
            <div>
                <NavBar/>
            </div>
            <div className="flex flex-col mx-auto items-center">
                <ContactLinks/>
            </div>

            <div className="space-y-52">
                <MailingList/>

            </div>
            <Footer/>
        </div>
    );
}
