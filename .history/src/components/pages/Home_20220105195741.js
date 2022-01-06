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
                <div className="mainLeft">
                    <h3>Hey there, I am Justin Kollie</h3>
                    <Link to='/contact-me' className='contact'>Contact</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Home;
