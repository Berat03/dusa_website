import React from "react";
import ContactLinks from "../components/join/contactLinks";
import MailingList from "../components/join/mailingList";
import Footer from "../components/repeats/footer";
import ScrollNavBar from "../components/repeats/scrollNavBar";

export default function JoinPage() {
    return (
        <div className="">
            <div className="sticky top-0 w-full z-50 ">
                <ScrollNavBar/>
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
