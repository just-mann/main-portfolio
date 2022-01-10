import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <div className='Footer'>
            <div className="Footer__header">
                <Link to='/'>Justin</Link>
            </div>
            <div className="Footer__usefulLinks">
                <Link to="/">About</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
                <Link to="/"></Link>
            </div>
        </div>
    )
}


export default Footer;