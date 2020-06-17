import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
    return (
        <div className="primary-container">
            {/* Navbar */}
            <Navbar/>

            {/* Body */}
            <div className="secondary-container">
                <h1>contact</h1>

                <div className="tertiary-container" id="contact">
                    <form className="contact-form">
                        <input className="subject-line" placeholder="subject"></input>
                        <input className="email-address" placeholder="email address"></input>
                        <input className="body-message" placeholder="message..."></input>
                        <div className="tertiary-container-buttons contact-button">Submit</div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
        
    );
  }
  
  export default Contact;