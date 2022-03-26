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
                    A LITTLE INSIGHT ABOUT ME AND THE THINGS I DO BEST.
                </h4>
                <div className="aboutCards">
                    <div className="aboutCardsDiv1">
                        <img src={myImage} alt="myImage" />
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cumque inventore, delectus dolorum ipsa quod saepe accusamus fugiat odio, assumenda tempora est vitae magnam voluptatibus, doloremque magni repellendus alias sit? Quos mollitia natus repellendus corrupti nesciunt perspiciatis eos. Quos amet veniam, voluptates ratione ea blanditiis!</p>
                        </div>
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
