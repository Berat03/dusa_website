import React from 'react';
import Img from "../assets/group_valley.jpg";

export default function ImageBgOverlapTextFull() {
    // Directly using React.CSSProperties type for inline style
    const style: React.CSSProperties = {
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
    };

    return (

        <div className="relative h-1/2 sm:1/4">
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="mx-auto absolute w-full h-screen bg-cover bg-center" style={style}></div>
            <h1>Text</h1>
        </div>
    );
}
