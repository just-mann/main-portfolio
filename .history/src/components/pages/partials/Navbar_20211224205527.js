import React from 'react';



const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="#" className="myLogo">Logo</a>
            <div className="middleLinks">
                <div className="navLinks">
                    <a href="#" className="home">Home</a>
                    <a href="#" className="about">About Me</a>
                    <a href="#" className="portfolio">Portfolio</a>
                    <a href="#" className="contact-me">Contact Me</a>
                </div>
            </div>
            <div className="nav-right">
                <a href="#" className="hireMe" id='hireMe'>Hire Me</a>
                <div className="switch">
                    <div className="switch-dot"></div>
                    <div className="switch-moon"></div>
                </div>
            </div>
            <div className="h-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;
