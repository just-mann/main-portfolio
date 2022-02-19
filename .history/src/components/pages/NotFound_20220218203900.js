import React from 'react';
import Navbar from './partials/Navbar';

const NotFound = () => {

    return (
        <div className="NotFound">
            <Navbar />
            <div className="NotFoundContainer">
                <h3>Page Not Found</h3>
            </div>
        </div>
    );
}
 
export default NotFound;