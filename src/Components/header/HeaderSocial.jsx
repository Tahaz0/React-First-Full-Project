import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';


export const HeaderSocial = () => {
    return (
        <div className='header-social'>
            <a href="https://linkedin.com" target='_black'>
                <BsLinkedin />
            </a>
            <a href="https://github.com" target='_black'>
                <BsGithub />
            </a>
            <a href="https://facebook.com" target='_black'>
                <BsFacebook />
            </a>
        </div>
    );
};
