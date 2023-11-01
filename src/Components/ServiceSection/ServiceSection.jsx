import React from 'react'

const ServiceSection = () => {
  return (
<section className="services">
        <img className="waves-services" src="images/waves-services.svg" alt="backgroundlines" />
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="link-boxes">
                <div className="box">
                    <a href="#">
                        <div className="advice">
                            <i className="fa-sharp fa-light fa-horizontal-rule"></i>
                            <h3>Business Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <button className="btn-round"><i className="fa-light fa-arrow-right"></i></button>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="#">
                        <div className="startup">
                            <i className="fa-sharp fa-light fa-horizontal-rule"></i>
                            <h3>Startup Business</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <button className="btn-round"><i className="fa-light fa-arrow-right"></i></button>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="#">
                        <div className="financial">
                            <i className="fa-sharp fa-light fa-horizontal-rule"></i>
                            <h3>Financial Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <button className="btn-round"><i className="fa-light fa-arrow-right"></i></button>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="#">
                        <div className="risk">
                            <i className="fa-sharp fa-light fa-horizontal-rule"></i>
                            <h3>Risk Management</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <button className="btn-round"><i className="fa-light fa-arrow-right"></i></button>
                        </div>
                    </a>
                </div>
            </div>
           <div className="center-objects"><a className="btn-transparent" href="services.html">Brows services <i className="fa-solid fa-arrow-up-right"></i></a></div> 
        </div>
    </section>  )
}

export default ServiceSection