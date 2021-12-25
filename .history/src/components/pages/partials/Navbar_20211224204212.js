import React from 'react';



const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="#" className="myLogo">Logo</a>
            <div className="middleLinks">
                <div className="myLinks">
                    <a href="#" className="home">Home</a>
                    <a href="#" className="about">About Me</a>
                    <a href="#" className="portfolio">Portfolio</a>
                    <a href="#" className="contact-me">Contact Me</a>
                </div>
                <div className="switch">
                    <div className="switch-dot"></div>
                    <div className="switch-moon"></div>
                </div>
            </div>
            <a href="#" className="hireMe" id='hireMe'>Hire Me</a>
        </div>
    )
}

export default Navbar;
