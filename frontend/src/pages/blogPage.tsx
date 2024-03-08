import React from "react";
import BlogGrid from "../components/blog/blogGrid";
import Footer from "../components/repeats/footer";
import ScrollNavBar from "../components/repeats/scrollNavBar";

export default function BlogPage() {
    return (
        <div className="w-full">
            <ScrollNavBar/>
            <BlogGrid/>
            <Footer/>
        </div>
    );
}
