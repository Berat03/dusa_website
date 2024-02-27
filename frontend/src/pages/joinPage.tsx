import NavBar from "../components/navBar";
import React from "react";
import ContactLinks from "../components/contactLinks";
import MailingList from "../components/mailingList";

export default function JoinPage() {
  return (
    <div className="h-screen">
      <div>
        <NavBar />
      </div>
        <div className="flex flex-col justify-center">
            <ContactLinks />
            <MailingList/>
        </div>

    </div>
  );
}
