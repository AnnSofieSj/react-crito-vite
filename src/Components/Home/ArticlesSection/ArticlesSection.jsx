import React from 'react'
import './ArticlesSection.css'

const ArticlesSection = () => {
  return (
    <section className="article-news">
            <div className="container">
                <div className="section-top">
                    <div className="section-title">
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <a className="btn-transparent" href="#">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></a>
                </div>
                <div className="articles">
                    <div className="article">
                        <img src="images/classroom.png" alt="photo of kristine palmer" />
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="article">
                        <img src="images/chatgpt.png" alt="photo of mark aubri" />
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div className="article">
                        <img src="images/cssbooks.png" alt="photo of kimberly hansen" />
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>                
                </div>
                <div className="dots">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>                
                    <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                    <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                    <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                </div>
            </div>
        </section>  )
}

export default ArticlesSection