import React from 'react';
import {BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs';

const About = () => {
    return (
        <div className="About">
            <div className="aboutContainer">
                <div className="aboutLeft">
                    <h3>About Me</h3>
                    <h2>I am a Front-End Web Developer</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quibusdam perspiciatis a rem in? 
                        Magnam, aperiam laboriosam porro nobis illum ducimus harum?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iste eos numquam vero placeat obcaecati corrupti, quasi, 
                        molestiae sequi dolore itaque blanditiis libero deserunt cum labore!
                    </p>
                    <div className="socialDiv">
                        <h3>Follow Me</h3>
                        <div>
                            <a href='#' target='_blank' className='instagram'><BsInstagram /></a>
                            <a href='#' target='_blank' className='github'><BsGithub /></a>
                            <a href='#' target='_blank' className='instagram'><BsTwitter /></a>
                        </div>
                        {/* <i className='instagram'><BsInstagram /></i> */}
                    </div>
                </div>
                <div className="aboutRight">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;
