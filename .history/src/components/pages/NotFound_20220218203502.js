import React from 'react';
import Navbar from './partials/Navbar';

const NotFound = () => {

    const Style = {
        minHeight: "99.5vh",
        paddingTop: "7.5em",
        paddingLeft: "2em",
        maxWidth: "1250px",
        margin: "auto"
    }

    return (
        <div className="NotFound">
            <Navbar />
            <div style={Style}>
                <h3>Page Not Found</h3>
            </div>
        </div>
    );
}
 
export default NotFound;