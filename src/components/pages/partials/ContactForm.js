import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
        <div className="ContactForm">
            <div className="connectSection">
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
                        <textarea name="message" id="message" className='message' cols="30" rows="10" aria-invalid="false" placeholder='Message' required></textarea>
                    </div>
                    <div className='consentDiv'>
                        <div>
                            <input type="checkbox" name="consent" id="consent" className='consent' />
                            <label htmlFor="consent">I agree that my submitted data is being collected and stored</label>
                        </div>
                        <input type="submit" className='submitBtn' id='submitBtn' value='Send Message' />
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default ContactForm;
