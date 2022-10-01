import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';



const contactData = [
    {
        icons: <MdOutlineMail />,
        media: 'Email',
        adress: 'mdredwan.bd90@gmail.com',
        link: 'https://mail.google.com'
    },
    {
        icons: <BsWhatsapp />,
        media: 'WhatsApp',
        adress: 'mdredwan.bd90@gmail.com',
        link: "https://www.whatsapp.com"
    },
    {
        icons: <BsMessenger />,
        media: 'Messenger',
        adress: 'mdredwan.bd90@gmail.com',
        link: 'https://www.facebook.com'
    },
]



export default function Contact() {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    {
                        contactData.map(({ icons, media, adress, link }, index) => {

                            return (
                                <article className='contact-option' key={index} >
                                    <i className='contact-icons' >{icons}</i>
                                    <h4>{media} </h4>
                                    <h5> {adress} </h5>
                                    <a href={link} target='_b'>Send a message</a>
                                </article>
                            );
                        })
                    }
                </div>

                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='8' placeholder='Your Message'></textarea>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </section>
    );
}
