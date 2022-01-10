import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaTwitter} from 'react-icons/fa';


const Footer = () => {
    return(
        <div className='Footer'>
            <div className="Footer__header">
                <Link to='/'>Justin</Link>
            </div>
            <div className="Footer__usefulLinks">
                <h3>Links</h3>
                <div>
                    <Link to="/">About</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">Contact</Link>
                </div>
            </div>
            <div className="Footer__socialLinks">
                <h3>Socials</h3>
                <div>
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    )
}


export default Footer;