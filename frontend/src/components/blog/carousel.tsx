import React, {useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';

const cardData = [
    {
        title: 'Descender',
        content: 'To go down safely, slower than jumping.',
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/bullpotChat.jpg",
    },
    {
        title: 'Chest Ascender',
        content: "So you don't die",
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/fatherStretch.jpg",
    },
];

export default function Carousel() {
    const [activeCard, setActiveCard] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false); // State to control GalleryFullSize visibility

    const nextCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard + 1) % cardData.length);
    };

    const prevCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard - 1 + cardData.length) % cardData.length);
    };

    const openGallery = () => {
        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
    };

    return (
        <div className="flex flex-col mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
                <img
                    src={cardData[activeCard].imageUrl}
                    alt={cardData[activeCard].title}
                    className="w-full sm:h-96 object-cover cursor-pointer" // Adjust height responsively if needed
                    onClick={openGallery}
                />

                <button
                    className={`absolute left-4 sm:left-8 transform -translate-x-1/2 top-1/2 z-10 p-2 sm:px-4 sm:py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={prevCard}
                    disabled={activeCard === 0}
                >
                    <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6"/>
                </button>

                <button
                    className={`absolute right-4 sm:right-8 transform translate-x-1/2 top-1/2 z-10 p-2 sm:px-4 sm:py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === cardData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextCard}
                    disabled={activeCard === cardData.length - 1}
                >
                    <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6"/>
                </button>
            </div>
        </div>

    );
}
