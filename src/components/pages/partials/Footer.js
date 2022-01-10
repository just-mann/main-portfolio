import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {FaGithub, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';


const Footer = () => {

    $(() => {
        const date = new Date();
        const year = date.getFullYear();
        $('.currentYear').html(year);
    })

    return(
        <div className='Footer'>
            <div className="Footer__header">
                <Link to='/'>Justin</Link>
            </div>
            <div className="Footer__address">
                <h3>Location</h3>
                <div>
                    <p>Pawtucket, RI 02860</p>
                    <a href='mailto:kolliejustin418@gmail.com'>kolliejustin418@gmail.com</a>
                </div>
            </div>
            <div className="Footer__usefulLinks">
                <h3>Links</h3>
                <div>
                    <Link to="/about-me">About</Link>
                    <Link to="/portfolio">Projects</Link>
                    <Link to="/contact-me">Contact</Link>
                </div>
            </div>
            <div className="Footer__socialLinks">
                <h3>Socials</h3>
                <div>
                    <a href="https://github.com/just-mann" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/justine-kollie-253b40156/" target='_blank'><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/401smooth/" target='_blank'><FaInstagram /></a>
                    <a href="https://twitter.com/iamjust_100" target='_blank'><FaTwitter /></a>

                    {/* <a href="#"></a> */}
                </div>
            </div>
            <div className="Footer__bottom">
                <p>Justin Kollie &copy; <span className='currentYear'></span>. All Rights Reserved.</p>
            </div>
        </div>
    )
}


export default Footer;