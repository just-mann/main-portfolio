import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';
import {Link} from 'react-router-dom';
import {BsLinkedin, BsGithub, BsTwitter, BsInstagram} from 'react-icons/bs';

const Home = () => {

    const myBackground = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '90vh'
    }

    return (
        <div className='Home'>
            <div className="heroSection" style={myBackground}>
                <div className="heroContainer">
                    <Navbar />
                    <div className="mydiv">
                        <div className="heroSocial">
                            <a href="#"><BsLinkedin /></a>
                            <a href="#"><BsGithub /></a>
                            <a href="#"><BsTwitter /></a>
                            <a href="#"><BsInstagram /></a>
                        </div>
                        <div className="heroMain">
                            <div className="heroMainLeft">
                                <h3 className='mainHeading'>I am <span>Justin Kollie</span></h3>
                                <h2 className='subHeading'>I am a front-end web developer</h2>
                                <p className="description">
                                    Lorem, ipsum. Accusantium quod libero quasi veritatis 
                                    consectetur vel natus, facere modi doloribus non. 
                                    Dolorum soluta aperiam vero.
                                </p>
                                <Link to='/' className="downloadResumeBtn">See Resume</Link>
                                <Link to='/contact-me' className="heroContactBtn">Contact Me</Link>
                            </div>
                            <div className="heroMainRight"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
