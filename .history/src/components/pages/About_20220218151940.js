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
                    <h2 className='aboutContainer__myName'>Justin Kollie</h2>
                    <h3 className='aboutContainer__subHeader'>Hey there</h3>
                    <h2 className='aboutContainer__header'>Let's work together to give your business a new creative start right away</h2>
                    <p className='aboutContainer__description'>
                    My name is Cazz. I am a self taught events photographer with a level 5 photography diploma based in Southampton, UK. I cover many genres in photography including portraiture, sport, special events such as baby showers and travel.
                    </p>
                    <img src={myImage} alt="myImage" className='aboutContainer__image'/>
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
