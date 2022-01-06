import React, {useState, useEffect} from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/lineBg.jpeg';
import {Link} from 'react-router-dom';

const Home = () => {

    const myBackground = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div className='Home' style={myBackground}>
            <Navbar />
            <div className="mainSection">
                <div className="mainHero">
                    <h3>Hey there, I am Justin Kollie</h3>
                    <p>
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                    <Link to='/contact-me' className='contact'>Get In Touch</Link>
                </div>
            </div>
            <section className='whatIDo'>

            </section>
        </div>
    )
}

export default Home;
