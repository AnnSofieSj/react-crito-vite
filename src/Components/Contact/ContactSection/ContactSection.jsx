import React from 'react'
import './Contact.css'
import visit from '@Images/Icon-visit.svg'
import call from '@Images/Icon-call.svg'
import email from '@Images/Icon-email.svg'

const ContactSection = () => {
  return (
    
    <section className="contact">
        <div className="container">
            <div className="boxes">
                <img src={visit} alt="pin icon" />
                <div className="text">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31</p>
                    <p>111 34 Stockholm</p>
                </div>
            </div>
            <div className="boxes">
                <img src={call} alt="phone icon" />
                <div className="text">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="boxes">
                <img src={email} alt="email icon" />
                <div className="text">              
                    <h3>Email us</h3>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default ContactSection