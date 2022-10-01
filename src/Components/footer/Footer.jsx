import React from 'react';
import './footer.css';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';



function Footer() {
    return (
        <footer id='footer'>
            <a href="6" className='footer-logo'>EGATOR</a>

            <ul className="permalinks">
                <li><a href="#home">
                    Home
                </a></li>
                <li><a href="#about">
                    About
                </a></li>
                <li><a href="#experience">
                    Experience
                </a></li>
                <li><a href="#service">
                    Services
                </a></li>
                <li><a href="#portfolio">
                    Portfolio
                </a></li>
                <li><a href="#testimonial">
                    Testimonial
                </a></li>
                <li><a href="#contact">
                    Contact
                </a></li>
            </ul>

            <div className="footer-social">
                <a href="https://www.facebook.com" target='-b'>
                    <BsFacebook />
                </a>
                <a href="https://www.linkedin.com" target='-b'>
                    <BsLinkedin />
                </a>
                <a href="https://www.teitter.com" target='-b'>
                    <BsTwitter />
                </a>
            </div>

            <div className="copyRight">
                <p>&copy; All rights reversed</p>
            </div>
        </footer>
    );
}

export default Footer;