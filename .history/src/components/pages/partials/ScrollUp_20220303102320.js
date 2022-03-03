import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import $ from 'jquery';


const ScrollUp = () => {

    let scrollTop = document.getElementById('scrollTop');

    $(() => {
        $(window).on('scroll', () => {
            if (window.scrollY > 10) {
                $("#scrollTop").css('display', 'block')
                //$('.side__nav__links').hide();
                //$('.page__up__arrow').css('display', 'block');
            } else {
                $("#scrollTop").css('display', 'none')
                //scrollTop.style.display = 'none';
                //$('.page__up__arrow').css('display', 'none');
            }
        });
    })

    const scrollStyle = {
        backgroundColor: "#F8F5F2",
        color: "black",
        padding: '7px',
        fontSize: "35px",
        position: "fixed",
        bottom: "15px",
        right: "22px",
        zIndex: "5",
        display: "none",
        cursor: "pointer",
        boxShadow: '7px 4px 11px -2px rgba(199,194,194,0.75)',
    } 


    return ( 
        <div style={scrollStyle} id="scrollTop">
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;