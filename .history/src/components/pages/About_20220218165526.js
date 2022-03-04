import React from 'react';
import Navbar from './partials/Navbar';
import myImage from './images/myBubble.jpeg';
import $ from 'jquery';
import {FaGithub, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import ContactForm from './partials/ContactForm';

const About = () => {

    $(() => {
        let submitBtn = $('.submitBtn');
    });

    return (
        <div className='About'>
            <Navbar />
            <section className="aboutContainer">
                <div className="aboutContainer__intro">
                    <h2 className='aboutContainer__myTitle'>About Me</h2>
                    <div>
                        <p className='description1 aboutContainer__description'>
                            My name is Justine (pronounced Justin). I am a self taught Frontend Web  
                            Developer with a level 5 photography diploma based in Southampton, UK. 
                            I cover many genres in photography including portraiture, sport, special 
                            events such as baby showers and travel.
                        </p>
                    </div>
                    <div>
                        <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                        <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                    </div>
                    <div>
                        <p className="description2 aboutContainer__description">
                            During the day I am a Cellphone Repair Technician in an Early Years setting, 
                            and studied for my degree within this sector. 
                            During nights and weekends, I spend my time perfecting 
                            different types of events to broaden my photography skills.
                        </p>
                        <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                    </div>
                </div>
            </section>
            <section className="achievements">
                <h3 className="achievements__subHeading">My Achievements</h3>
                <h2 className="achievements__heading">Personal Achievements</h2>
                <p className="achievements__detail">
                    Nullam arcu enim, dictum at pharetra pharetra, 
                    vulputate ut eros. In ante lacus, 
                    varius quis facilisis vitae, iaculis sit amet justo.
                </p>
            </section>
            <section className="socialSection">
                <div className="socialSectionContainer">
                    <h3>Follow Me</h3>
                    <div>
                        <a href="https://github.com/just-mann" target='_blank' rel='nonopener nonreferrer'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/justine-kollie-253b40156/" target='_blank' rel='nonopener nonreferrer'><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/401smooth/" target='_blank' rel='nonopener nonreferrer'><FaInstagram /></a>
                        <a href="https://twitter.com/iamjust_100" target='_blank' rel='nonopener nonreferrer'><FaTwitter /></a>
                    </div>
                    <p>
                        Let’s Work Together. <br/>
                        Just send me an email – <a href='mailto:kolliejustin418@gmail.com'>kolliejustin418@gmail.com</a>
                    </p>
                </div>
            </section>
            <ContactForm />
        </div>
    )
}

export default About;
