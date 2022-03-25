import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {

    const scrollStyle = {
        color: "white",
        fontSize: "30px",
        position: "fixed",
        bottom: "15px",
        right: "55px",
        zIndex: "5",
    } 


    return ( 
        <div style={scrollStyle}>
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;