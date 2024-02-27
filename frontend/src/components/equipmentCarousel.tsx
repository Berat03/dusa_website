import React, {useState} from 'react';
import Tilt from "react-parallax-tilt"
// Import your images
import descenderImage from '../assets/equipmentCardImages/Descender.png';
import cowsTailsImage from '../assets/equipmentCardImages/Descender.png';
import harnessImage from '../assets/equipmentCardImages/Descender.png';

const cardData = [
    {
        color: 'bg-red-900',
        title: 'Descender',
        content: 'To go down safely, slower than jumping.',
        imageUrl: descenderImage,
    },
    {
        color: 'bg-blue-500',
        title: 'Cows Tails',
        content: 'So you don\'t die',
        imageUrl: cowsTailsImage,
    },
    {
        color: 'bg-green-500',
        title: 'Harness',
        content: 'Makes your butt look big. Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big Makes your butt look big',
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

    // Define button styles based on the active card
    const prevButtonStyle = activeCard === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-600 text-white";
    const nextButtonStyle = activeCard === cardData.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-600 text-white";

    return (
        <div className="flex flex-col items-center justify-center mt-3">
            <div className={`flex flex-col sm:flex-row h-screen rounded-lg ${cardData[activeCard].color}`}>
                    <img src={cardData[activeCard].imageUrl} alt={cardData[activeCard].title}
                         className="p-5 ml-10 w-full h-64 sm:h-5/6 object-contain"/>
                    <div className="flex flex-col justify-center p-4">
                        <h2 className="text-white text-4xl font-bold">{cardData[activeCard].title}</h2>
                        <p className="text-white text-2xl">{cardData[activeCard].content}</p>
                    </div>
            </div>
    <div className="flex flex-row">

        <button className={`mt-4 px-4 mr-1 py-2 rounded ${prevButtonStyle}`} onClick={prevCard}
                disabled={activeCard === 0}>Prev Card
        </button>
        <button className={`mt-4 px-4 ml-1 py-2 rounded ${nextButtonStyle}`} onClick={nextCard}
                disabled={activeCard === cardData.length - 1}>Next Card
        </button>

    </div>
        </div>
);
}
