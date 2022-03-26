import React, { useEffect } from 'react';
import Navbar from './partials/Navbar';
import myImage from './images/myBubble.jpeg';
import myProfImg from './images/profileImg.jpg';
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
                <h3>About Me</h3>
                <h4>
                    A LITTLE INSIGHT ABOUT ME AND THE THINGS I DO BEST.
                </h4>
                <div className="aboutCards">
                    <div className="aboutCardsDiv1">
                        <img src={myProfImg} alt="myImage" />
                        <div>
                            <h3></h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cumque inventore, delectus dolorum ipsa quod saepe accusamus fugiat odio, assumenda tempora est vitae magnam voluptatibus, doloremque magni repellendus alias sit? Quos mollitia natus repellendus corrupti nesciunt perspiciatis eos. Quos amet veniam, voluptates ratione ea blanditiis!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto neque fuga ea similique eius, nobis molestiae corporis aspernatur architecto, modi tenetur expedita accusamus perferendis nulla ducimus voluptate. Facilis fugit corrupti vel velit, non quia eum accusantium quae consequuntur culpa asperiores repudiandae similique ea ducimus officiis nulla odio alias necessitatibus veritatis ipsam assumenda. Itaque, dignissimos!
                            </p>
                        </div>
                    </div>
                    <div className="aboutCardsDiv2">
                        <div>
                            <h3></h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cumque inventore, delectus dolorum ipsa quod saepe accusamus fugiat odio, assumenda tempora est vitae magnam voluptatibus, doloremque magni repellendus alias sit? Quos mollitia natus repellendus corrupti nesciunt perspiciatis eos. Quos amet veniam, voluptates ratione ea blanditiis!
                            </p>
                        </div>
                        <img src={myImage} alt="myImage" />
                    </div>
                </div>
                <div>

                </div>
            </section>
            <ContactForm />
        </div>
    )
}

export default About;
