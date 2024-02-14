import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// Import images
import lay_2 from '../assests/parallaxImages/Caver_Layer.png'; // Adjust the path as necessary
import lay_1 from '../assests/parallaxImages/low_layer.png'; // Adjust the path as necessary

export default function ParallaxComposition() {
  return (
    <Parallax pages={2}>

      <ParallaxLayer offset={0} speed={0.3}>
        <img src={lay_2} style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <img src={lay_1}  style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>


    </Parallax>
  );
}
