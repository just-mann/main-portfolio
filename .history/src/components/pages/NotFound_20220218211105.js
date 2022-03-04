import React from 'react';
import Navbar from './partials/Navbar';
import NotFoundImg from './images/undraw_Page_not_found_re_e9o6.png';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="NotFound">
            
            <div className="NotFoundContainer">
                <h3>OOPS</h3>
                <h2>Page Not Found</h2>
                <div>
                    <img src={NotFoundImg} alt="" />
                </div>
                <Link to='/'>Back Home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;