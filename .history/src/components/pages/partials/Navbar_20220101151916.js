import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {

    
    const [ham, setHam] = useState(true);
    
    const toggleHam = () => {
        const menu = document.querySelector('.menu');
        setHam(!ham);

        if (ham === true) {
            menu.classList.add('open')
        } else {
            menu.classList.remove('open')
        }
    }

    return (
        <div className='Navbar'>
            <div>
                <Link to="/"className="myLogo">
                    <h3>justin</h3>
                </Link>
                <div className="navLinks">
                    <Link to='/' className='home'>Home</Link>
                    <Link to="/about-me"className='about'>About</Link>
                    <Link to='/portfolio' className='work'>Work</Link>
                    <Link to='/contact-me' className='contact'>Contact</Link>
                </div>
                <div className="menu" id='menu' onClick={toggleHam}>
                    <span className='lines line1'></span>
                    <span className='lines line2'></span>
                    <span className='lines line3'></span>
                </div>
                <div className="menu" id='menu' onClick={toggleHam}>
                    <span className='lines line1'></span>
                    <span className='lines line2'></span>
                    <span className='lines line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
