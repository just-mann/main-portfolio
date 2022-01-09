import React from 'react';
import Navbar from './partials/Navbar';
import myImage from './images/myBubble.jpeg';
import $ from 'jquery';

const About = () => {

    $(() => {
        let submitBtn = $('.submitBtn');


    })

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
                    <div className='nameDiv'>
                        <input type="text" name="fullName" id="fullName" className='fullName' placeholder='Your Name' />
                    </div>
                    <div className='emailDiv'>
                        <input type="email" name="email" id="email" className='email' placeholder='Your Email' />
                    </div>
                    <div className='messageDiv'>
                        <textarea name="message" id="message" className='message' cols="30" rows="5" aria-invalid="fals" placeholder='Message'></textarea>
                    </div>
                    <div className='consentDiv'>
                        <div>
                            <input type="checkbox" name="consent" id="consent" className='consent' />
                            <label htmlFor="consent">I agree that my submitted data is being collected and stored</label>
                        </div>
                        <input type="submit" className='submitBtn' id='submitBtn' value='Send Message' />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default About;
