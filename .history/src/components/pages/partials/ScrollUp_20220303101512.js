import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import $ from 'jquery';


const ScrollUp = () => {

    let scrollTop = document.getElementById('scrollTop');

    $(() => {
        $(window).on('scroll', () => {
            if (window.scrollY > 10) {
                scrollTop.style.display = 'block';
                //$('.side__nav__links').hide();
                //$('.page__up__arrow').css('display', 'block');
            } else {
                scrollTop.style.display = 'none';
                //$('.page__up__arrow').css('display', 'none');
            }
        });
    })

    const scrollStyle = {
        backgroundcolor: "",
        color: "white",
        fontSize: "35px",
        position: "fixed",
        bottom: "15px",
        right: "55px",
        zIndex: "5",
        display: "none"
    } 


    return ( 
        <div style={scrollStyle} id="scrollTop">
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;