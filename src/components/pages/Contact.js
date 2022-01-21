import React, { Component } from 'react';
import Navbar from './partials/Navbar';
import {FaGithub, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';





class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <Navbar />
        <div className="contactContainer">
          <section className="socialSection">
              <div className="socialSectionContainer">
                <h3>Follow Me</h3>
                <div>
                    <a className='icon' href="https://github.com/just-mann" target='_blank' rel='nonopener nonreferrer'><FaGithub /></a>
                    <a className='icon' href="https://www.linkedin.com/in/justine-kollie-253b40156/" target='_blank' rel='nonopener nonreferrer'><FaLinkedinIn /></a>
                    <a className='icon' href="https://www.instagram.com/401smooth/" target='_blank' rel='nonopener nonreferrer'><FaInstagram /></a>
                    <a className='icon' href="https://twitter.com/iamjust_100" target='_blank' rel='nonopener nonreferrer'><FaTwitter /></a>
                </div>
                <p>
                  Let’s Work Together. <br/>
                  Just send me an email – <a href='mailto:kolliejustin418@gmail.com'>kolliejustin418@gmail.com</a>
                </p>
              </div>
          </section>
          <section className="connectSection">
                <h3>contact Me</h3>
                <p>I'd love to talk regarding a job, project or just to chat about web development.</p>
                <form action="">
                    <div className='nameDiv'>
                        <input type="text" name="fullName" id="fullName" className='fullName' placeholder='Your Name' required/>
                    </div>
                    <div className='emailDiv'>
                        <input type="email" name="email" id="email" className='email' placeholder='Your Email' required/>
                    </div>
                    <div className='messageDiv'>
                        <textarea name="message" id="message" className='message' cols="30" rows="8" aria-invalid="false" placeholder='Message' required></textarea>
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
