import React from 'react';

// Define an array of team members
const teamMembers = [
    {
        name: 'Louie Baker',
        role: 'UI Designer',
        imageUrl: 'https://dummyimage.com/80x80',
    },
    {
        name: 'George Angel',
        role: 'CTO',
        imageUrl: 'https://dummyimage.com/84x84',
    },
    {
        name: 'Maria Buckles',
        role: 'Founder',
        imageUrl: 'https://dummyimage.com/88x88',
    },
    {
        name: 'Berat Bulbul',
        role: 'DevOps',
        imageUrl: 'https://dummyimage.com/90x90',
    },
    {
        name: 'Annais ',
        role: 'Software Engineer',
        imageUrl: 'https://dummyimage.com/94x94',
    },
    {
        name: 'Ben ',
        role: 'UX Researcher',
        imageUrl: 'https://dummyimage.com/98x98',
    },
    {
        name: 'Dionne',
        role: 'QA Engineer',
        imageUrl: 'https://dummyimage.com/100x90',
    },
    {
        name: 'Chris',
        role: 'System',
        imageUrl: 'https://dummyimage.com/104x94',
    },
    {
        name: 'Maya',
        role: 'Product Manager',
        imageUrl: 'https://dummyimage.com/108x98',
    },
];

export default function OurTeam() {
    return (
        <section className="text-white body-font font-extrabold">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of
                        them.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={member.imageUrl}/>
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
