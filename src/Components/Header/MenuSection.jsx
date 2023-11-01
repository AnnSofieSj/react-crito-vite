import React from 'react'
import img_Logotype from '@Images/Logo.svg'
import Button from '../Generics/Button'

const MenuSection = () => {
  return (
    <header>
        <div className="container">
            <a href="index.html"><img src={img_Logotype} alt="crito logotype" /></a>
            <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="contact-menu">
                    <div className="contact-left-menu">
                        <div className="content-box">
                            <i className="fa-solid fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-solid fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="socialmedia">
                        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>                        
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <a className="active" href="index.html">Home</a>
                        <a href="service.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <Button type="yellow" text="Login" url=""/>
                </div>
            </div>
        </div>
    </header>    
  )
}

export default MenuSection