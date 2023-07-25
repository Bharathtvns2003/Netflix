import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [show, handleShow] = useState(false);

    const transitionbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionbar);
        return () => window.removeEventListener("scroll", transitionbar);
    }, []);

    return (
        <div className={`nav ${show ? 'nav_black' : ''}`}>
            <div className='nav-contents'>
                <img className='nav-logo' src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="" />
                <img className='nav-avatar' src="https://www.freepnglogos.com/uploads/mr-bean/mr-bean-avatar-character-cartoon-rowan-atkinson-png-image-33.png" alt="" />
            </div>
        </div>
    )
}
