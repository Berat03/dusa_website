import React, {useEffect, useState} from 'react'
import NavBar from "./navBar";

export default function ConditionalScrollNavBar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false);
        } else { // if scroll up show the navbar
            setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav className={`active ${show && 'hidden'}`}>
            ....
        </nav>
    );

    return (
        <>
            {show && ( // Correct conditional rendering syntax
                <div className={"sticky top-0"}>
                    <NavBar/>
                </div>
            )}
        </>
    );
}