import React, { useState } from 'react';
// Correct way to import when using TypeScript
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import descenderImage from '../assets/equipmentCardImages/Descender.png';
import cowsTailsImage from '../assets/equipmentCardImages/Descender.png';
import harnessImage from '../assets/equipmentCardImages/Descender.png';

const cardData = [
    {
        color: 'bg-stone-900',
        title: 'Descender',
        content: 'To go down safely, slower than jumping.',
        imageUrl: descenderImage,
    },
    {
        color: 'bg-stone-800',
        title: 'Cows Tails',
        content: 'So you don\'t die',
        imageUrl: cowsTailsImage,
    },
    {
        color: 'bg-stone-700',
        title: 'Harness',
        content: 'Makes your bum look big and hurts your waist, can also kill you if you stay in it too long',
        imageUrl: harnessImage,
    },
];

export default function EquipmentCarousel() {
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
            <div className={`flex flex-col sm:flex-row w-full h-screen ${cardData[activeCard].color} relative`}>
                <img src={cardData[activeCard].imageUrl} alt={cardData[activeCard].title}
                     className="p-5 ml-10 object-contain"/>
                <div className="flex flex-col justify-center align-middle  p-4">
                    <h2 className="text-white text-4xl font-bold">{cardData[activeCard].title}</h2>
                    <p className="text-white text-2xl">{cardData[activeCard].content}</p>
                </div>
                <button className={`absolute z-30 left-0 top-1/2 z-30 transform -translate-y-1/2 px-4 py-2 rounded-full ${prevButtonStyle}`} onClick={prevCard}
                        disabled={activeCard === 0}>
                    <ChevronLeftIcon className="h-6 w-6 text-white"/>
                </button>
                <button className={`absolute right-0 top-1/2 z-30 transform -translate-y-1/2 px-4 py-2 rounded-full ${nextButtonStyle}`} onClick={nextCard}
                        disabled={activeCard === cardData.length - 1}>
                    <ChevronRightIcon className="h-6 w-6 text-red"/>
                </button>
            </div>
        </div>
    );
}
