import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

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
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                <div className="homeContainer">

                </div>
            </div>
        </div>
    )
}

export default Home;