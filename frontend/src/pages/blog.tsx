import React from "react";
import BlogGrid from "../components/blogGrid";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ScrollNavBar from "../components/ScrollNavBar";

export default function Blog() {
    return (
        <div>
            <ScrollNavBar/>
            <BlogGrid/>
            <Footer/>
        </div>
    );
}
