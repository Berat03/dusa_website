import React from 'react';
import ParallaxComposition from "../components/parallaxComposition";
import NavBar from "../components/navBar";
import ClubStats from "../components/clubStats";
import About from "../components/about";
// style={{backgroundColor:'rgb(10,20,28)'}}
export default function HomePage() {
  return (
    <div className='flex flex-col'>
        <div className=''>
              <NavBar/>
        </div>
      <div  className="h-screen -z-40">
        <ParallaxComposition />
      </div>
        <ClubStats/>
    </div>
  );
}
