import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// do: correctly rename the layers
// CONVERT TO SVG!!!!! more optimised for perfrormance and resolution
// Could add scroll to stars
import lay_0 from '../assets/parallaxImages/bottom.png';
import lay_1 from '../assets/parallaxImages/low_layer.png';
import lay_2 from '../assets/parallaxImages/Caver_Layer.png';
import lay_3 from '../assets/parallaxImages/after_caver_not_water.png';
import lay_4 from '../assets/parallaxImages/stars.png';
export default function ParallaxComposition() {
  return (
    <Parallax pages={1.2} className=''>
       <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 50 }}>
        <h1 className='flex justify-center items-center text-6xl text-black font-extrabold mt-10 p-32'>ADVENTURE AWAITS</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} >
        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgb(10,20,208)' }}></div>
      </ParallaxLayer>

       <ParallaxLayer offset={0} speed={0.15}>
        <img src={lay_4}  alt="" style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
        <img src={lay_3}  alt="" style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.4}>
        <img src={lay_2} alt=""  style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6}>
        <img src={lay_1} alt=""   style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.4}>
        <img src={lay_0} alt="cover_bottom"   style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>
         <ParallaxLayer offset={0.1} speed={0.35}>
        <img src={lay_0} alt="cover_bottom"   style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>
         <ParallaxLayer offset={0.15} speed={0.3}>
        <img src={lay_0} alt="cover_bottom"   style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0}>
        <img src={lay_0} alt="cover_bottom"   style={{ width: '100%', height: '100%' }} />
      </ParallaxLayer>



    </Parallax>
  );
}
