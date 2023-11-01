import React from 'react'
import './NewsSection.css'

const NewsSection = () => {
  return (
    <section className="news-letter">
        <img className="backgroundlines" src="images/lines-newsletter.svg" alt="backgroundlines" />
        <div className="container">
            <h2>Get News Updates By Signup </h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>   )
}

export default NewsSection