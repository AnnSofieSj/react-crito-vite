import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <img className="waves-footer" src="images/waves-footer.svg" alt="backgroundlines" />
        <div className="container">
            <div className="footer-top">                
                <div className="logo">
                    <img src="images/Logo-footer.svg" alt="crito logotype" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="footer-headline">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a> 
                </div>
                <div className="footer-headline">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a> 
                </div>
                <div className="footer-headline">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Turorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a> 
                </div>
                <div className="footer-headline">
                    <h3>Link</h3>                    
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Turorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>                     
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                    <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <div className="socialmedia">
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>   
  )
}

export default Footer