import React from 'react';
import { Link } from 'react-router-dom';
import profImg from './images/profileImg.jpg';

const Home = () => {
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
                    <div className="myCard">
                        <img src= alt="frontEnd" />
                        <h3>Front End</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button>Link</button>
                    </div>
                    <div className="myCard">
                        <img src="" alt="webDev" />
                        <h3>Web Developer</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button>Link</button>
                    </div>
                    <div className="myCard">
                        <img src="" alt="" />
                        <h3>Product Title</h3>
                        <p>Commodo quis imperdiet massa tincidunt nunc pulvinar.</p>
                        <button>Link</button>
                    </div>
                </div>
            </div>
            <div className="selectedProjects">
                <h3>Selected Projects</h3>
            </div>
        </div>
    )
}

export default Home;
