import React from "react";
import { useNavigate } from 'react-router-dom';
import BlogGrid from "../components/blogGrid";
import NavBar from "../components/navBar";

export default function Blog(){
    const navigate = useNavigate();

    return (
        <div>
            <NavBar/>
            <BlogGrid/>

        </div>
    );
}


