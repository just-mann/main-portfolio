import React, {useState, useEffect} from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/lineBg.jpeg';
import {Link} from 'react-router-dom';
import {FaReact, FaGit, FaGithub, FaNodeJs, FaFigma} from 'react-icons/fa';
import {SiJquery, SiExpress, SiCsswizardry} from 'react-icons/si';
import {BsBootstrap} from 'react-icons/bs';
import {MdMobileFriendly} from 'react-icons/md';
import {IoLogoJavascript, IoLogoSass} from 'react-icons/io';

const Home = () => {

    const myBackground = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover'
    }

    const designImg = <FaFigma />;
    const devImg = <FaFigma />;
    const respDesImg = <MdMobileFriendly />;

    return (
        <div>
            <div className='Home' style={myBackground}>
                <Navbar />
                <div className="mainSection">
                    <div className="mainHero">
                        <h3>Hey there, I am Justin Kollie</h3>
                        <p>
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </p>
                        <Link to='/contact-me' className='contact'>Get In Touch</Link>
                    </div>
                </div>
            </div>
            <section className='whatIDo'>
                <div className="whatIDoLeft">
                    
                </div>
                <div className="whatIDoRight">
                    <p className='whoAmI'>Who I Am</p>
                    <h3 className='heading'>I design & build amazing websites</h3>
                    <p className='description'>We want our clients to feel awesome and unique. Let us bring your projects to another level!</p>
                    <Link to='/portfolio' className='viewPortfolio'>Portfolio</Link>
                </div>
                
            </section>
            <section className="mySkills">
                <h3>My Skills</h3>
                <div className='skillsContainer'>
                    <div className="skill" title='JavaScript'><IoLogoJavascript /></div>
                    <div className="skill" title='ReactJS'><FaReact /></div>
                    <div className="skill" title='NodeJS'><FaNodeJs /></div>
                    <div className="skill" title='Sass'><IoLogoSass /></div>
                    <div className="skill" title='Bootstrap4'><BsBootstrap /></div>
                    <div className="skill" title='jQuery'><SiJquery /></div>
                    <div className="skill" title='Git'><FaGit /></div>
                    <div className="skill" title='Github'><FaGithub /></div>
                    <div className="skill" title='Express'><SiExpress /></div>
                    <div className="skill" title='CSS3'><SiCsswizardry /></div>
                </div>
            </section>
            <section className="mySpecialty">
                <div className="specContainer">
                    <div className='respDesign'>
                        <i>{designImg}</i>
                        <h3>Creative Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                        </p>
                        <Link to='/'>Icon</Link>
                    </div>
                    <div className='development'>
                        <i class="fas fa-code"></i>
                        <h3>Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                        </p>
                        <Link to='/'>Icon</Link>
                    </div>
                    <div className='design'>
                        <i>{respDesImg}</i>
                        <h3>Mobile Friendly</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                        </p>
                        <Link to='/'>Icon</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
