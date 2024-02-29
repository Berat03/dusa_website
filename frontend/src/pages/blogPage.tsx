import React from "react";
import BlogGrid from "../components/blogGrid";
import Footer from "../components/footer";
import ScrollNavBar from "../components/scrollNavBar";

export default function BlogPage() {
    return (
        <div>
            <ScrollNavBar/>
            <BlogGrid/>
            <Footer/>
        </div>
    );
}