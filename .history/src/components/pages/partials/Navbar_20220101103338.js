import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

    $(() => {
        let menu = document.querySelector('.menu');

        menu.addEventListener('click', () => {
            if (menu.classList.contains('menuOpen')) {
                menu.classList.remove('menuOpen')
            } else {
                menu.classList.add('menuOpen');
            }
        })
    })

    return (
        <div className='Navbar'>
            <div>
                <a href='#' className="myLogo">
                    <h3>justin</h3>
                </a>
                <div className="navLinks">
                    <Link to='/' className='home'>Home</Link>
                    <a href="#" className='about'>About</a>
                    <Link to='/portfolio' className='work'>Work</Link>
                    <Link to='/contact-me' className='contact'>Contact</Link>
                </div>
                <div className="menu">
                    <span className='lines line1'></span>
                    <span className='lines line2'></span>
                    <span className='lines line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
