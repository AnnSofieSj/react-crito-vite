import React from 'react'
import './ProjectSection.css'

const ProjectSection = () => {
  return (
<section className="project">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-articles">
                <a href="#">
                    <img src="images/article-business.png" alt="image of a man reading Business paper" />
                    <h3>
                        Grow your business
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                                      
                </a>                
                <a href="#">
                    <img src="images/article-responsive.png" alt="image of a man reading Business paper" />
                    <h3>
                        Why your client needs a responsive website
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                    
                </a>
                <a href="#">
                    <img src="images/article-educate.png" alt="image of a man reading Business paper" />
                    <h3>
                        Educate your employees to get better results
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                   
                </a>
                <a href="#">
                    <img src="images/article-insights.png" alt="image of a man reading Business paper" />
                    <h3>
                        Business Insights is a important piece of your business
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                    
                </a>
            </div>
            <div className="center-objects"><a className="btn-black" href="projects.html">All Recent Projects <i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection