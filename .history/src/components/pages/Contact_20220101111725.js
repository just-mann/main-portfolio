import React, { Component } from 'react';
import Navbar from './partials/Navbar';




class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <Navbar />
        <div className="contactContainer">
          <h2>Contact</h2>
        </div>
      </div>
    )
  }
}

export default Contact;
