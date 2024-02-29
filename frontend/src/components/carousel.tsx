import React, {useState} from 'react';
// Correct way to import when using TypeScript
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';

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
        content: 'So you don\'t die',
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

    const prevButtonStyle = activeCard === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-600 text-white";
    const nextButtonStyle = activeCard === cardData.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-600 text-white";

    return (
        <div className="flex flex-col w-full items-center justify-center mt-3 relative">
            <div className={`flex flex-col sm:flex-row w-full h-screen  relative`}>
                <img src={cardData[activeCard].imageUrl} alt={cardData[activeCard].title}
                     className="p-5 object-contain mx-auto"/>
                <button
                    className={`absolute z-30 ml-4 left-0 top-1/2 z-30 transform -translate-y-1/2 px-4 py-2 rounded-full ${prevButtonStyle}`}
                    onClick={prevCard}
                    disabled={activeCard === 0}>
                    <ChevronLeftIcon className="h-6 w-6 text-white"/>
                </button>
                <button
                    className={`absolute right-0 mr-4 top-1/2 z-30 transform -translate-y-1/2 px-4 py-2 rounded-full ${nextButtonStyle}`}
                    onClick={nextCard}
                    disabled={activeCard === cardData.length - 1}>
                    <ChevronRightIcon className="h-6 w-6 text-red"/>
                </button>
            </div>
        </div>
    );
}
