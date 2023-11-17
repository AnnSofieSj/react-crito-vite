import React from 'react'
import './ShowcaseArticle.css'
import backgroundlines from '@Images/waves-showcase.svg'


const ShowcaseArticle = () => {
  return (
    <section className="showcase-article">
      <img className="backgroundlines" src={backgroundlines} alt="backgroundlines" />
      <div className="container">
          <div className="orientation">
              <p className="home">Home</p>              
              <p className="news">News</p>              
          </div>
          <h1>News & Articles</h1>            
      </div>
    </section>  )
}

export default ShowcaseArticle