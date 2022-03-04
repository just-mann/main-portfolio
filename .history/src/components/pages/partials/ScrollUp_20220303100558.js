import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {

    const scrollStyle = {
        color: "red",
        backgroundColor: "blue",
        position: "absolute",
    } 


    return ( 
        <div style={scrollStyle}>
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;