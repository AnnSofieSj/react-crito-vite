import React from 'react'
import './FeaturesSection.css'
import ContentBox from './ContentBox'
import Button from '../../Generics/Button'
import hands from '@Images/hands.svg'
import lamp from '@Images/lamp.svg'
import graf from '@Images/graf.svg'
import boxsetting from '@Images/boxsetting.svg'


const FeaturesSection = () => {

    const featuresBox =[
      {image:`${hands}`, title:"Business Advice", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
      {image:`${lamp}`, title:"Startup Business", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
      {image:`${graf}`, title:"Financial Advice", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
      {image:`${boxsetting}`, title:"Risk Management", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
    ]

  return (
    <section className="features">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button type="yellow" text="Learn more" url=""/>
            </div>
            <div className="content-boxes">
            {featuresBox.map((feature, index) =>(
                <ContentBox key={index} image={feature.image} title={feature.title} description={feature.description} />
              ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection