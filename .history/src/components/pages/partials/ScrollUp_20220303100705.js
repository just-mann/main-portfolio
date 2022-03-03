import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {

    const scrollStyle = {
        color: "white",
        height: "20px",
        backgroundColor: "blue",
        position: "absolute",
        bottom: "15px",
        right: "55px",

    } 


    return ( 
        <div style={scrollStyle}>
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;