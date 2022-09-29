import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';


function Experience() {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">

                <div className="experience-frontEnd">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">

                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>CSS</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>JavaScript</h4>
                                <small className='text-light'>
                                    Intermediate
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>React</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>TailWin</h4>
                                <small className='text-light'>
                                    Basic
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Bootstrap</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* ******************front end Ends **************************** */}



                {/* ****************** back end starts *************************** */}

                <div className="experience-backtEnd">
                    <h3>Backend Development</h3>
                    <div className="experience-content">

                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Node Js</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Mongo DB</h4>
                                <small className='text-light'>
                                    Experience
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>C#</h4>
                                <small className='text-light'>
                                    Intermediate
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Asp.Net</h4>
                                <small className='text-light'>
                                    Basic
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Python</h4>
                                <small className='text-light'>
                                    Advance
                                </small>
                            </div>
                        </article>


                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icon' />
                            <div>

                                <h4>Django</h4>
                                <small className='text-light'>
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;