import React from 'react'
import './TestimonialSection.css'
import cassandra from '@Images/cassandra.png'
import amanda from '@Images/amanda.png'
import jack from '@Images/jack.png'
import Button from '../../Generics/Button'

const TestimonialSection = () => {
  return (
<section className="testimonial">
        <div className="container">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="users">
                <div className="box">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>            
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="user">
                        <img src={cassandra} alt="photo of cassandra warren" />
                        <div className="name">
                            <h3>Cassandra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>            
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="user">
                        <img src={amanda} alt="photo of Amanda Tulling" />
                        <div className="name">
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div>    
                    </div>
                </div>
                <div className="box">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>            
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="user">
                        <img src={jack} alt="photo of Jack McDogglas" />
                        <div className="name">
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-objects"><Button type="black" text="All Reviews"/></div>
        </div>
    </section>  )
}

export default TestimonialSection