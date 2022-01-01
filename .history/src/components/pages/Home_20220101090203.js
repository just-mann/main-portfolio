import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

const Home = () => {

    myBackground = {
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        width: '100%'
    }

    return (
        <div className='Home'>
            <div className="heroSection" style={{background: `url(${bgImage})`}}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;
