import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// do: correctly rename the layers
// CONVERT TO SVG!!!!! more optimised for performance and resolution
// Could add scroll to stars
import lay_0 from "../assets/parallaxImages/bottom.png";
import lay_1 from "../assets/parallaxImages/low_layer.png";
import lay_2 from "../assets/parallaxImages/Caver_Layer.png";
import lay_3 from "../assets/parallaxImages/after_caver_not_water.png";
import stars from "../assets/parallaxImages/stars.png";
import lay_5 from "../assets/parallaxImages/middleLayers.png";
import lay_6 from "../assets/parallaxImages/sideWalls.png";
import water from "../assets/parallaxImages/water.png";
import last_walls from "../assets/parallaxImages/last_walls.png";

export default function ParallaxComposition() {
  const ref = useRef<any>();

  const scrollListener = () => {
    const handleWheelEvent = () => {
      const { container, current } = ref.current;
      const scrollpercent =
        current / (container.current.scrollHeight - window.innerHeight);
      console.log(scrollpercent);
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);

  return (
    <Parallax pages={1.12} className="" ref={ref}>
      <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 50 }}>
        <h1 className="flex justify-center items-center text-6xl text-black font-extrabold mt-10 p-32">
          ADVENTURE AWAITS
        </h1>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(10,20,208)",
          }}
        ></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <img src={stars} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.12}>
        <img
          src={last_walls}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.17}>
        <img src={water} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <img src={lay_6} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <img src={lay_5} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.3}>
        <img src={lay_3} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <img src={lay_2} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <img src={lay_1} alt="" style={{ width: "100%", height: "100%" }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.1} speed={0.7}>
        <img
          src={lay_0}
          alt="cover_bottom"
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={0.5}>
        <img
          src={lay_0}
          alt="cover_bottom"
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.15} speed={0.3}>
        <img
          src={lay_0}
          alt="cover_bottom"
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0}>
        <img
          src={lay_0}
          alt="cover_bottom"
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.21} speed={0}>
        <img
          src={lay_0}
          alt="cover_bottom"
          style={{ width: "100%", height: "100%" }}
        />
      </ParallaxLayer>
    </Parallax>
  );
}
