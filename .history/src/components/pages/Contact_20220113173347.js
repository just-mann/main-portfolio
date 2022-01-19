import React, { Component } from 'react';
import Navbar from './partials/Navbar';




class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <Navbar />
        <div className="contactContainer">
          <h2>Contact</h2>
          <section className="connectSection">
                <h3>contact Me</h3>
                <form action="">
                    <div className='nameDiv'>
                        <input type="text" name="fullName" id="fullName" className='fullName' placeholder='Your Name' required/>
                    </div>
                    <div className='emailDiv'>
                        <input type="email" name="email" id="email" className='email' placeholder='Your Email' required/>
                    </div>
                    <div className='messageDiv'>
                        <textarea name="message" id="message" className='message' cols="30" rows="5" aria-invalid="false" placeholder='Message' required></textarea>
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
      </div>
    )
  }
}

export default Contact;
