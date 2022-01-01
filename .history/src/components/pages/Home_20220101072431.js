import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.PNG';

const Home = () => {
    return (
        <div className='Home'>
            <div className="heroSection" style={{backgroundImage: `url(${bgImage})`}}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;
