import React from 'react';

// Define an interface for the component props
interface ImageBgOverlapTextFullProps {
    title: string;
    description: string;
    image: string;
}

// Update the component to accept props
const ImageBgOverlapTextFull: React.FC<ImageBgOverlapTextFullProps> = ({title, description, image}) => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-black opacity-40 z-10 w-full h-full"></div>
            <div className="absolute inset-0 flex justify-center items-center z-20 w-full h-full">
                <div className="text-center text-white">
                    <h1 className={"font-extrabold text-6xl md:text-7xl lg:text-8xl"}>{title}</h1>
                    <p className={"font-extrabold text-xl md:text-xl lg:text-2xl "}>{description}</p>
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full object-cover object-center" style={style}></div>
        </div>
    );
};

export default ImageBgOverlapTextFull;
