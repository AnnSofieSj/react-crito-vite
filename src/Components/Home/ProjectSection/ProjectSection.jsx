import React from 'react'
import './ProjectSection.css'
import business from '@Images/article-business.png'
import responsive from '@Images/article-responsive.png'
import educate from '@Images/article-educate.png'
import insights from '@Images/article-insights.png'
import Button from '../../Generics/Button'
import { Link } from 'react-router-dom'


const ProjectSection = () => {
  return (
<section className="project">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-articles">
                <Link to="#">
                    <img src={business} alt="image of a man reading Business paper" />
                    <h3>
                        Grow your business
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                                      
                </Link>                
                <Link to="#">
                    <img src={responsive} alt="image of a man reading Business paper" />
                    <h3>
                        Why your client needs a responsive website
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                    
                </Link>
                <Link to="#">
                    <img src={educate} alt="image of a man reading Business paper" />
                    <h3>
                        Educate your employees to get better results
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                   
                </Link>
                <Link to="#">
                    <img src={insights} alt="image of a man reading Business paper" />
                    <h3>
                        Business Insights is a important piece of your business
                    </h3>
                    <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i>
                    </div>                    
                </Link>
            </div>
            <div className="center-objects"><Button type="black" text="All Recent Projects" url=""/>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection