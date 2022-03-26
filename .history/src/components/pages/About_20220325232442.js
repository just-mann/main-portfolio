import React, { useEffect } from 'react';
import Navbar from './partials/Navbar';
import myImage from './images/myBubble.jpeg';
import {FaGithub, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import ContactForm from './partials/ContactForm';

const About = () => {
    let location = 'Providence, Rhode Island';

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='About'>
            <Navbar />
            <section className="aboutContainer">
                <h3>About</h3>
                <h4>
                    I CREATE THE BEST PRODUCT QUALITY
                    AND I AM BEST AT THIS.
                </h4>
                <div className="aboutCards">
                    <div className="aboutCardsDiv1">
                        
                    </div>
                    <div className="aboutCardsDiv2">

                    </div>
                </div>
            </section>
            <ContactForm />
        </div>
    )
}

export default About;
