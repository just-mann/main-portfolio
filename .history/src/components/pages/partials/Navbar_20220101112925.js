import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

    $(() => {
        const menu = document.querySelector('.menu');

        menu.addEventListener('click', () => {            
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
            } 
                menu.classList.add('open');
                
            
        })
    })

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
                <div className="menu" id='menu'>
                    <span className='lines line1'></span>
                    <span className='lines line2'></span>
                    <span className='lines line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
