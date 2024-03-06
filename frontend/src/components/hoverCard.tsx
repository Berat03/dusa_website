import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="flex justify-evenly flex-row bg-custom_bg">
      <div className=" px-4 py-12 text-slate-900">
        <TiltCard text="Warm fleece or Jumper" />
      </div>
      <div className="px-4 py-12 text-slate-900">
        <TiltCard text="A change of clothes" />
      </div>
      <div className="px-4 py-12 text-slate-900">
        <TiltCard text="Base layers" />
      </div>
      <div className="px-4 py-12 text-slate-900">
        <TiltCard text="Wellies (we might be able to provide)" />
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

// Define the interface for TiltCard props
interface TiltCardProps {
  text: string; // This specifies that the `text` prop should be a string
}

// Use the TiltCardProps interface to type the props parameter
const TiltCard = ({ text }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default Example;
