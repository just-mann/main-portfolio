import React from 'react';
import Navbar from './partials/Navbar';
import bgImage from './images/myBgImg.png';

const Home = () => {

    const myBackground = {
        background: linear-gradient(to right,rgba(0,119,181,.8),rgba(0,119,181,.8)),url(${bgImage});
        background-position: center;
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
