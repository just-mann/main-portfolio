import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import $ from 'jquery';


const ScrollUp = () => {

    //let scrollTop = document.getElementById('scrollTop');
    let navBar = document.querySelector('.Navbar');
    let lines = document.querySelectorAll('.lines');
    let resTxt = document.querySelectorAll('.resTxt');
    let navLinks = document.querySelectorAll('.navLinks a');




    $(() => {
        $(window).on('scroll', () => {
            if (window.scrollY > 10) {
                $("#scrollTop").css('display', 'block');
                $(navBar).css('backgroundColor', 'white');
                $(navBar).addClass('shadow-sm');
                $('.respNav').css('backgroundColor', 'white');
                $(resTxt).css('color', 'black');
                $(lines).css('color', 'black');
                $(navLinks).css('color', 'black');
                //$('.side__nav__links').hide();
                //$('.page__up__arrow').css('display', 'block');
            } else {
                $("#scrollTop").css('display', 'none');
                $(navBar).css('backgroundColor', 'black');
                $(navBar).removeClass('shadow-sm')
                $('.respNav').css('backgroundColor', 'black');
                $(resTxt).css('color', 'white');
                $(navLinks).css('color', 'white');
                $(lines).css('color', 'white');
                //scrollTop.style.display = 'none';
                //$('.page__up__arrow').css('display', 'none');
            }
        });

        $("#scrollTop").on('click', () => {
            window.scrollTo(0, 0);
        })
    })

    const scrollStyle = {
        backgroundColor: "#F8F5F2",
        color: "#202021",
        padding: '7px',
        fontSize: "35px",
        position: "fixed",
        bottom: "15px",
        right: "20px",
        zIndex: "5",
        display: "none",
        cursor: "pointer",
        boxShadow: '-6px 4px 25px 2px rgba(219,219,219,0.75)',
        transition: 'display 300ms ease',
    } 


    return ( 
        <div style={scrollStyle} id="scrollTop">
            <FaArrowUp />
        </div>
    );
}
 
export default ScrollUp;