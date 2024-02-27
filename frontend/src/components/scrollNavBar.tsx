import React, { useState, useEffect } from "react";
import NavBar from "./navBar";

export default function ScrollAwareNavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { // clean dode
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  return <NavBar  />;
};

