import React from 'react';

const teamMembers = [
    {
        name: 'Louie Baker',
        role: 'President',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/louie.png',
    },
    {
        name: 'George Angel',
        role: 'Treasurer',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/george.png',
    },
    {
        name: 'Maria Buckles',
        role: 'Trip Leader',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/maria.png',
    },
    {
        name: 'Berat Bulbul',
        role: 'Trip Leader',
        imageUrl: 'https://dummyimage.com/90x90',
    },
    {
        name: 'Annais ',
        role: 'Training Secretary',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/annais.png',
    },
    {
        name: 'Ben ',
        role: 'Gear Secretary',
        imageUrl: 'https://dummyimage.com/98x98',
    },
    {
        name: 'Dionne',
        role: 'Vice-President',
        imageUrl: 'https://dummyimage.com/100x90',
    },
    {
        name: 'Christopher',
        role: 'Trip Secretary',
        imageUrl: 'https://dummyimage.com/104x94',
    },
    {
        name: 'Maya',
        role: 'Social Secretary',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/maya.png',
    },
    {
        name: 'Chloe Almond',
        role: 'Welfare',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/maya.png',
    },
    {
        name: 'Josh',
        role: 'Welfarey',
        imageUrl: 'https://dusabackend.s3.eu-west-2.amazonaws.com/members/2023_24/maya.png',
    },
];

export default function OurTeam() {
    return (
        <section className="text-white body-font font-extrabold bg-custom_bg">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Our current 2023/2024 academic year exec and trip leaders.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team"
                                     className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                     src={member.imageUrl}/>
                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-bold">{member.name}</h2>
                                    <p className="text-gray-500 font-medium">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
