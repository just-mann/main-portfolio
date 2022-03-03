import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {

    const scrollStyle = {
        backgroundcolor: "",
        color: "white",
        fontSize: "35px",
        position: "fixed",
        bottom: "15px",
        right: "55px",
        zIndex: "5",
    } 


    return ( 
        <div style={scrollStyle} id="scrollTop">
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;