import React, {useState, useEffect} from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/bgImage.PNG';

const Home = () => {

    const myBackground = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
    }

    return (
        <div className='Home'>
            <Navbar />
            
        </div>
    )
}

export default Home;
