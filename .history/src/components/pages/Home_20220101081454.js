import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

const Home = () => {

    myBackground = {
        background: linear-gradient(rgba(0,119,181,.8),rgba(0,119,181,.8)),url({bgImage});
        
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
