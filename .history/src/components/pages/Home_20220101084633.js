import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

const Home = () => {

    

    return (
        <div className='Home'>
            <div className="heroSection" style={{background: `url(${bgImage})`, backgroundRepeat: 'no-repeat'}}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;
