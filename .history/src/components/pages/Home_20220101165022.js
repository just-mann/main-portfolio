import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';

const Home = () => {

    const myBackground = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%'
    }

    return (
        <div className='Home'>
            <div className="heroSection" style={myBackground}>
                <Navbar />
                <div className="heroSocial">
                    <a href=""><BsLinkedin /></a>
                    <a href=""><BsGithub /></a>
                    <a href=""><BsTwitter /></a>
                    <a href=""></a>
                </div>
                <div className="homeContainer">

                </div>
            </div>
        </div>
    )
}

export default Home;