import React from 'react';

const Home = () => {
    return (
        <div className="Home">
            <div className="hero">
                <div className="heroContainer">
                    <div className="heroLeft">
                        <div className="grayCircle"></div>
                        <img src="" alt="heroImage" className="heroImage" />
                        <div className="title webdev">Web Designer</div>
                        <div className="title webdes">Web Developer</div>
                        <div className="title frontE">Front End</div>
                    </div>
                    <div className="heroRight">
                        <h2>Hello I am Justin Kollie</h2>
                        <h3>Front End Web Developer & Designer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid in id quisquam odit optio laborum impedit dicta architecto doloremque?</p>
                        <button className="heroBtn dnldResume">See Resume</button>
                        <button className="heroBtn heroHireMe">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
