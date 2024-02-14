import React from 'react';
import ParallaxComposition from "../components/parallaxComposition";
import NavBar from "../components/navBar";

export default function HomePage() {
  return (
    <div>
        <NavBar/>
      <div style={{ backgroundColor: 'rgb(205,228,234)' }} className="h-screen">
        <ParallaxComposition/>
      </div>
    </div>
  );
}
