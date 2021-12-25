import React from 'react';


const Navbar = () => {

    return (
        <div className="Navbar">
            <a href="#" className="myLogo">Just Kollie</a>
            <div className="navLinks">
                <a href="#" className="home link">Home</a>
                <a href="#" className="about link">About Me</a>
                <a href="#" className="portfolio link">Portfolio</a>
                <a href="#" className="contact-me link">Contact Me</a>
            </div>
            <div className="nav-right">
                <a href="#" className="hireMe" id='hireMe'>Hire Me</a>
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
