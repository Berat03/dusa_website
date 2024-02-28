import React from 'react';
import Img from "../assets/group_valley.jpg";

export default function ImageBgOverlapTextFull() {
    const style = {
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
    };

    return (
        <div className="flex flex justify-center mx-auto max-w-7xl w-full h-screen" style={style}></div>
    );
}
