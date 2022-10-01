import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';


function Service() {
    return (
        <section id='service'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container service-container">

                <article className="service">
                    <div className="service-heade">
                        <h3>
                            UI/UX Design
                        </h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                    </ul>
                </article>

                {/* ************ end of ui/ux ************** */}


                <article className="service">
                    <div className="service-heade">
                        <h3>
                            Web Development
                        </h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                    </ul>
                </article>

                {/* ************ end of Web Development ************** */}


                <article className="service">
                    <div className="service-heade">
                        <h3>
                            Contant Creation
                        </h3>
                    </div>
                    <ul className="service-list">
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisic elit.</p>
                        </li>
                    </ul>
                </article>
                {/* ************ end of contant creation ************** */}
            </div>
        </section>
    );
}

export default Service;