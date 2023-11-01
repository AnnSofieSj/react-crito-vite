import React from 'react'
import './FeaturesSection.css'
import ContentBox from './ContentBox'
import Button from '../../Generics/Button'

const FeaturesSection = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button type="yellow" text="Learn more" url=""/>
            </div>
            <div className="content-boxes">
            <ContentBox titel="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            <ContentBox titel="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            <ContentBox titel="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            <ContentBox titel="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection