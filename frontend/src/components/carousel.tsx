import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import img1 from '../assets/group_valley.jpg';
import img2 from '../assets/afterMyTrip.jpg';

const cardData = [
    {
        title: 'Descender',
        content: 'To go down safely, slower than jumping.',
        imageUrl: img1,
    },
    {
        title: 'Cows Tails',
        content: "So you don't die",
        imageUrl: img2,
    },
];

export default function Carousel() {
    const [activeCard, setActiveCard] = useState(0);

    const nextCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard + 1) % cardData.length);
    };

    const prevCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard - 1 + cardData.length) % cardData.length);
    };

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="relative w-full max-w-4xlflex items-center justify-center">
                <img src={cardData[activeCard].imageUrl} alt={cardData[activeCard].title} className="w-full h-full object-contain"/>

                <button
                    className={`absolute left-8 transform -translate-x-1/2 top-1/2 z-10 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={prevCard}
                    disabled={activeCard === 0}>
                    <ChevronLeftIcon className="h-6 w-6"/>
                </button>

                <button
                    className={`absolute right-8 transform translate-x-1/2 top-1/2 z-10 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === cardData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextCard}
                    disabled={activeCard === cardData.length - 1}>
                    <ChevronRightIcon className="h-6 w-6"/>
                </button>
            </div>
        </div>
    );
}
