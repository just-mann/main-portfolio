import React from 'react';
import Navbar from './partials/Navbar';
import myImage from './images/myBubble.jpeg';

const About = () => {
    return (
        <div className='About'>
            <Navbar />
            <section className="aboutContainer">
                <div className="aboutContainer__intro">
                    <h2 className='aboutContainer__myName'>Justin Kollie</h2>
                    <h3 className='aboutContainer__subHeader'>Hello there</h3>
                    <h2 className='aboutContainer__header'>Let's give your business a new creative start right away</h2>
                    <p className='aboutContainer__description'>
                        Donec hendrerit diam. Pellentesque egestas risus a cursus 
                        nisl aliquam malesuada. Donec suscipit posuere fringilla. 
                        Vivamus tristique, odio non efficitur malesuada, 
                        purus quam dictum elit, vitae hendrerit ex magna et.
                    </p>
                    <img src={myImage} alt="myImage" className='aboutContainer__image'/>
                </div>
            </section>
            <section className="achievements">
                <h3 className="achievements__subHeading"></h3>
                <h2 className="achievements__heading">Personal Achievements</h2>
                <p className="achievements__detail">
                    Nullam arcu enim, dictum at pharetra pharetra, 
                    vulputate ut eros. In ante lacus, 
                    varius quis facilisis vitae, iaculis sit amet justo.
                </p>
            </section>
            <section className="socialSection">

            </section>
            <section className="connectSection">
                <h3>Contact Me</h3>
                <form action="">
                    <div>
                        <input type="text" name="fullName" id="fullName" className='fullName' />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className='email' />
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default About;
