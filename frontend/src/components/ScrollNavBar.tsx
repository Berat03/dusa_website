import React, {useState} from 'react';
import NavBar from "./navBar";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";

const ScrollNavBar: React.FC = () => {
    const {scrollY} = useScroll();
    const [hideNavBar, setHideNavBar] = useState(false);
    const minThreshold = 20
    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev: number = scrollY.getPrevious() ?? 0;
        if (latest > prev && latest > minThreshold) {
            setHideNavBar(true);
        } else {
            setHideNavBar(false);
        }
    });

    return (
        <div className="sticky top-0 w-full z-50">
            <motion.nav
                variants={{
                    visible: {y: 0},
                    hidden: {y: "-100%"}
                }}
                animate={hideNavBar ? "hidden" : "visible"}
                transition={{duration: 0.3, ease: "easeInOut"}}
            >
                    <div className="bg-white bg:opacity-75">
                        <NavBar/>
                    </div>


            </motion.nav>
        </div>
    );
};

export default ScrollNavBar;

