import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

const Home = () => {

    const myBackground = {
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%'
    }

    return (
        <div className='Home'>
            <div className="heroSection" style={myBackground}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;
