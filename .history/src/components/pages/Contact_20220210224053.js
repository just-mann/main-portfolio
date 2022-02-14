import React, { Component } from 'react';
import Navbar from './partials/Navbar';
import {FaGithub, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import ContactForm from './pagesStyles/ContactForm';





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
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact;
