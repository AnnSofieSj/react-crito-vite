import React from 'react'
import './WhyUsSection.css'
import chatting from '@Images/chatting.png'

const WhyUsSection = () => {
  return (
<section className="why-us">
        <div className="background-box"></div>
        <div className="container">            
            <div className="left-side">
                <div className="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>                                 
                <div className="headlines">
                    <div className="headline">
                        <div className="icon"><i className="fa-light fa-thumbs-up"></i></div>                        
                        <div className="text">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="headline">
                        <div className="icon"><i className="fa-light fa-hexagon"></i></div>                        
                        <div className="text">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="headline">
                        <div className="icon"><i className="fa-light fa-pen-nib"></i></div>
                        <div className="text">                       
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="headline">
                        <div className="icon"><i className="fa-light fa-head-side-gear"></i></div> 
                        <div className="text">                       
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="right-side">
                <img src={chatting} alt="two women talking at a desk holding a tablet" />                
            </div>
        </div>
    </section>  )
}

export default WhyUsSection