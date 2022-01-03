import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';
import {Link} from 'react-router-dom';
import {BsLinkedin, BsGithub, BsTwitter, BsInstagram} from 'react-icons/bs';

const Home = () => {

    

    return (
        <div className='Home'>
            <div className="heroSocial">
                <a href="#"><BsLinkedin /></a>
                <a href="#"><BsGithub /></a>
                <a href="#"><BsTwitter /></a>
                <a href="#"><BsInstagram /></a>
            </div>
            <div className="heroSection">
                <Navbar />
                <div className="heroMain">
                    <div className="heroMainLeft">
                        <h3 className='mainHeading'>I am <span>Justin Kollie</span></h3>
                        <h2 className='subHeading'>I am a front-end web developer</h2>
                        <p className="description">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that 
                        leads to the success of the overall product
                        </p>
                        <Link to='/' className="downloadResumeBtn">See Resume</Link>
                        <Link to='/contact-me' className="heroContactBtn">Contact Me</Link>
                    </div>
                    <div className="heroMainRight">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
