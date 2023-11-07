import React from 'react'
import './ShowcaseContact.css'
import backgroundlines from '@Images/waves-showcase.svg'


const ShowcaseContactSection = () => {
  return (
    <section className="showcase-contact">
      <img className="backgroundlines" src={backgroundlines} alt="backgroundlines" />
      <div className="container">
          <div className="orientation">
              <p className="home">Home</p>              
              <p className="contact">Contact</p>              
          </div>
          <h1>Let’s Connect</h1>            
      </div>
    </section>
  )
}

export default ShowcaseContactSection