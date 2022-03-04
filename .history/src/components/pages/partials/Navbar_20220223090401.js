import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';


const Navbar = () => {

    
    const [ham, setHam] = useState(true);
    
    const toggleHam = () => {
        const toggle = document.querySelector('#toggle');
        const respNav = document.querySelector('#respNav');
        //const navBar = document.querySelector('#NavBar');
        //const  window;



    
        setHam(!ham);

        $(() => {
            if (ham === true) {
                toggle.classList.add('open');
                $(respNav).slideDown();
            } else {
                toggle.classList.remove('open');
                $(respNav).slideUp();
            }

            $(window).on('scroll', () => {
                if (window.scrollY > 15) {
                    $('.scrollTop').removeClass('d-none');
                    $('.scrollTop').css('display', 'block');
                    
                 } else {
                     $('.scrollTop').addClass('d-none');
                     $('.scrollTop').css('display', 'none');
                 }
             })
         
             


        })
    }

    return (
        <nav className='Navbar' id='NavBar'>
            <div className='NavbarContainer'>
                <Link to="/"className="myLogo">
                    <h3>justin</h3>
                </Link>
                <div className="navLinks">
                    <Link to='/' className='home'>Home</Link>
                    <Link to="/about-me"className='about'>About</Link>
                    <Link to='/projects' className='work'>Projects</Link>
                    <Link to='/contact-me' className='contact'>Contact</Link>
                </div>
                <div className="toggle" id='toggle' onClick={toggleHam}>
                    <span className='lines line1'></span>
                    <span className='lines line2'></span>
                    <span className='lines line3'></span>
                </div>
            </div>
            <div className="respNav" id='respNav'>
                <Link to='/' className='home'>Home</Link>
                <Link to="/about-me"className='about'>About</Link>
                <Link to='/projects' className='work'>Projects</Link>
                <Link to='/contact-me' className='contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
