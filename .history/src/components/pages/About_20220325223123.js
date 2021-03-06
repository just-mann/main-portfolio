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
                <div className="aboutContainer__intro">
                    <h3 className='aboutContainer__myTitle'>About Me</h3>
                    <h4>
                        I CREATE THE BEST PRODUCT QUALITY
                        AND I AM BEST AT THIS.
                    </h4>
                    <div>
                        <p className='description1 aboutContainer__description'>
                            My name is Justine (pronounced Justin). I am a self taught Frontend Web  
                            Developer with a level 5 photography diploma based in {location}, USA. 
                            I cover many genres in photography including portraiture, sport, special 
                            events such as baby showers and travel.
                        </p>
                        <p className="description2 aboutContainer__description">
                            During the day I am a Cellphone Repair Technician in an Early Years setting, 
                            and studied for my degree within this sector. 
                            During nights and weekends, I spend my time perfecting 
                            different types of events to broaden my photography skills.
                        </p>
                    </div>
                    <div className="imgGrid">
                        <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                        <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                    </div>
                    <div>
                        <p className='description1 aboutContainer__description'>
                            My name is Justine (pronounced Justin). I am a self taught Frontend Web  
                            Developer with a level 5 photography diploma based in Southampton, UK. 
                            I cover many genres in photography including portraiture, sport, special 
                            events such as baby showers and travel.
                        </p>
                        <p className="description2 aboutContainer__description">
                            During the day I am a Cellphone Repair Technician in an Early Years setting, 
                            and studied for my degree within this sector. 
                            During nights and weekends, I spend my time perfecting 
                            different types of events to broaden my photography skills.
                        </p>
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
                    <a className='icon' href="https://github.com/just-mann" target='_blank' rel='nonopener nonreferrer' title='Check Out My GitHub'><FaGithub /></a>
                    <a className='icon' href="https://www.linkedin.com/in/justine-kollie-253b40156/" target='_blank' rel='nonopener nonreferrer' title='Follow Me On LinkedIn'><FaLinkedinIn /></a>
                    <a className='icon' href="https://www.instagram.com/401smooth/" target='_blank' rel='nonopener nonreferrer' title='Follow Me On Instagram'><FaInstagram /></a>
                    <a className='icon' href="https://twitter.com/iamjust_100" target='_blank' rel='nonopener nonreferrer' title='Follow Me On Twitter'><FaTwitter /></a>
                    </div>
                    <p>
                        Let???s Work Together. <br/>
                        Just send me an email ??? <a href='mailto:kolliejustin418@gmail.com'>kolliejustin418@gmail.com</a>
                    </p>
                </div>
            </section>
            <ContactForm />
        </div>
    )
}

export default About;
