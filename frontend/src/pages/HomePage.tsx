import React from 'react';
import ParallaxComposition from "../components/parallaxComposition";
import NavBar from "../components/navBar";

export default function HomePage() {
  return (
    <div className='flex flex-col'>
        <div className=''>
              <NavBar/>
        </div>
      <div  className="h-screen -z-40">
        <ParallaxComposition />
      </div>
        <div style={{backgroundColor:'rgb(10,20,28)'}} className='h-screen'>
            <h1 className='font-extrabold text-3xl text-white flex justify-center'>Begin Text</h1>
        </div>
    </div>
  );
}
