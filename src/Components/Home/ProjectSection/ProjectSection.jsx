import React from 'react'
import './ProjectSection.css'
import business from '@Images/article-business.png'
import responsive from '@Images/article-responsive.png'
import educate from '@Images/article-educate.png'
import insights from '@Images/article-insights.png'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'
import ArticleBox from './ArticleBox'


const ProjectSection = () => {

    const ArticleBoxes = [
        {link:"#", image:`${business}`, altText:"image of a man reading Business paper", title:"Grow your business"},
        {link:"#", image:`${responsive}`, altText:"image of a man reading Business paper", title:"Why your client needs a responsive website"},
        {link:"#", image:`${educate}`, altText:"image of a man reading Business paper", title:"Educate your employees to get better results"},
        {link:"#", image:`${insights}`, altText:"image of a man reading Business paper", title:"Business Insights is a important piece of your business"}
    ]

  return (
<section className="project">
        <div className="container">
            <SectionTitle title="Project & Case Studies" text="Let’s Looks Our Global Projects" />            
            <div className="project-articles">
                {ArticleBoxes.map((boxes, index) => (
                    <ArticleBox key={index} link={boxes.link} image={boxes.image} altText={boxes.altText} title={boxes.title} />
                ))}               
            </div>
            <div className="center-objects"><Button type="black" text="All Recent Projects" url=""/>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection