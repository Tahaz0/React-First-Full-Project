import React from 'react';
import './nav.css';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail, BiBook } from 'react-icons/bi';
import { useState } from 'react';


function Nav() {

    const [activeClass, setActiveClass] = useState('#home');

    return (
        <nav>
            <a href="#home" onClick={() => setActiveClass('#home')} className={activeClass === '#home' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={() => setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href="#experience" onClick={() => setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}>
                <BiBook />
            </a>
            <a href="#service" onClick={() => setActiveClass('#service')} className={activeClass === '#service' ? 'active' : ''}>
                <RiServiceLine />
            </a>
            <a href="#contact" onClick={() => setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
}

export default Nav;