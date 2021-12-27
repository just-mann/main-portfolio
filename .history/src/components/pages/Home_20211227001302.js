import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import profImg from './images/profileImg.jpg';
import webDevImg from './images/webDevImages.jpg';
import frontEndImg from './images/frontEndImg.jpg';
import {FiArrowRight} from 'react-icons/fi';

const Home = () => {

    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/just-mann/my-database/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyProjects({
                    myProjects: data
                })
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="Home">
            <div className="hero">
                <div className="heroContainer">
                    <div className="heroLeft">
                        <div className="grayCircle"></div>
                        {/* <img src={profImg} alt="heroImage" className="heroImage" /> */}
                        <div className="title webdes">Responsive Design</div>
                        <div className="title webdev">Web Developer</div>
                        <div className="title frontE">Front End</div>
                    </div>
                    <div className="heroRight">
                        <h2>Hello, I am Justin Kollie</h2>
                        <h3>Front End Web Developer & Designer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid in id quisquam odit optio laborum impedit dicta architecto doloremque?</p>
                        <button className="heroBtn dnldResume">See Resume</button>
                        <Link to="/contact-me" className="heroBtn heroHireMe">Hire Me</Link>
                    </div>
                </div>
            </div>
            <div className="whatIDo">
                <div className="whatIdo-container">
                    <div className="myCard card1">
                        <img src={frontEndImg} alt="frontEnd" />
                        <h3>Front End</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button><FiArrowRight /></button>
                    </div>
                    <div className="myCard card2">
                        <img src={webDevImg} alt="webDev" />
                        <h3>Web Developer</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button><FiArrowRight /></button>
                    </div>
                    <div className="myCard card3">
                        <img src={frontEndImg} alt="" />
                        <h3>Responsive Design</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button><FiArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className="selectedProjects">
                <h3>Selected Projects</h3>
                <div className="projectDiv">
                    {
                        myProjects.map(project => {
                            return (
                                <a href={project.url}>
                                    
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
