import React from 'react';
import Navbar from './partials/Navbar';

const NotFound = () => {

    const Style = {
        minHeight: "99.5vh"
    }

    return (
        <div className="NotFound" style={Style}>
            <Navbar />
            <h3>Page Not Found</h3>
        </div>
    );
}
 
export default NotFound;