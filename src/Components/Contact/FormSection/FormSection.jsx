import React from 'react'
import './Form.css'

const FormSection = () => {
  return (
    <section className="form">
        <div className="container">
            <h2>Leave us a message <br /> for any information.</h2>
            <form id="messageForm" method="post">
                <div>                    
                    <input type="text" id="name" name="name" title="Name" placeholder="Name*" tabIndex="1" />
                </div>
                <div>                   
                    <input type="email" id="email" name="email" title="email" placeholder="Email*" tabIndex="2" />
                </div>
                <div>                   
                    <textarea name="message" id="message" placeholder="Your Message*" tabIndex="3"></textarea>
                </div>
                <button className="btn-yellow" type="submit" tabIndex="4">Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default FormSection