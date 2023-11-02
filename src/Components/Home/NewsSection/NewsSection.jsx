import React from 'react'
import './NewsSection.css'
import backgroundlines from '@Images/lines-newsletter.svg'
import Button from '../../Generics/Button'

const NewsSection = () => {
  return (
    <section className="news-letter">
        <img className="backgroundlines" src={backgroundlines} alt="backgroundlines" />
        <div className="container">
            <h2>Get News Updates By Signup </h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Button type="yellow" text="Subscribe" url=""/>
            </form>
        </div>
    </section>   )
}

export default NewsSection