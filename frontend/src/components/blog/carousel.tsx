import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  imageUrls: string[];
}

export default function Carousel({imageUrls}: CarouselProps) {
    const [activeCard, setActiveCard] = useState(0);

    const nextCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard + 1) % imageUrls.length);
    };

    const prevCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard - 1 + imageUrls.length) % imageUrls.length);
    };

    return (
        <div className="flex flex-col mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
                <img
                    src={imageUrls[activeCard]}
                    className="w-full sm:h-96 object-cover cursor-pointer rounded-lg" // Adjust height responsively if needed
                />

                <button
                    className={`absolute left-4 sm:left-8 transform -translate-y-1/2 top-1/2 z-10 p-2 sm:px-4 sm:py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={prevCard}
                    disabled={activeCard === 0}
                >
                    <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6"/>
                </button>

                <button
                    className={`absolute right-4 sm:right-8 transform -translate-y-1/2 top-1/2 z-10 p-2 sm:px-4 sm:py-2 rounded-full bg-gray-800 hover:bg-gray-600 text-white ${activeCard === imageUrls.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextCard}
                    disabled={activeCard === imageUrls.length - 1}
                >
                    <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6"/>
                </button>
            </div>
        </div>
    );
};

