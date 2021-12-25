import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {


    return (
        <div className="Navbar">
            <Link to="/" className="myLogo">Just Kollie</Link>
            <div className="navLinks">
                <Link to="/" className="home link">Home</Link>
                <Link to="/about" className="about link">About Me</Link>
                <Link to="/portfolio" className="portfolio link">Portfolio</Link>
                <Link to="/contact-me" className="contact-me link">Contact Me</Link>
            </div>
            <div className="nav-right">
                <Link to="/contact-me" className="hireMe" id='hireMe'>Hire Me</Link>
                <div className="switch">
                    <div className="flicker"></div>
                    <div className="switch-moon"></div>
                </div> 
                <div className="h-menu">
                    <span className='top'></span>
                    <span className='middle'></span>
                    <span className='bottom'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
