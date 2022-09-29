import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">

                <div className="about-me">
                    <div className="about-me-img">
                        <img src={ME} alt="about_image" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="about-card">
                            <FiUsers className='about-icon' />
                            <h5>Clints</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className="about-card">
                            <VscFolderLibrary className='about-icon' />
                            <h5>Projetcs</h5>
                            <small>50+ Completed</small>
                        </article>
                    </div>


                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam quis itaque, repudiandae, assumenda quaerat pariatur ducimus, animi temporibus quibusdam alias! Dolore reiciendis maiores a aut omnis numquam labore debitis!
                    </p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>

        </section>
    );
};

export default About;