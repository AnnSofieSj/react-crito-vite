import React from 'react'
import './TestimonialSection.css'

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
                        <img src="images/cassandra.png" alt="photo of cassandra warren" />
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
                        <img src="images/amanda.png" alt="photo of Amanda Tulling" />
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
                        <img src="images/jack.png" alt="photo of Jack McDogglas" />
                        <div className="name">
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-objects"><a className="btn-black" href="reviews.html">All Reviews<i className="fa-solid fa-arrow-up-right"></i></a></div>
        </div>
    </section>  )
}

export default TestimonialSection