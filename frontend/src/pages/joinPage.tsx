import NavBar from "../components/navBar";
import React from "react";
import ContactLinks from "../components/contactLinks";
import MailingList from "../components/mailingList";

export default function JoinPage() {
    return (
        <div className="">
            <div>
                <NavBar/>
            </div>
            <div className="flex flex-col items-center">
                <ContactLinks/>
                    <MailingList/>
            </div>

        </div>
    );
}
