import React from 'react';



const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="#">Logo</a>
            <div className="myLinks">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact Me</a>
            </div>
            <a href="#" className="hireMe">Hire Me</a>
        </div>
    )
}

export default Navbar;
