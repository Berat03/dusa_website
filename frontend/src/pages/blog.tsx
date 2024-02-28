import React from "react";
import BlogGrid from "../components/blogGrid";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function Blog() {
    return (
        <div>
            <NavBar/>
            <BlogGrid/>
            <Footer/>
        </div>
    );
}
