import React from 'react';
import { CTA } from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import { HeaderSocial } from './HeaderSocial';

function Header() {
    return (
        <header id='home'>
            <div className="container header-container">
                <h5>Hello I'am</h5>
                <h1>Redwan</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />

                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll-down'> Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;