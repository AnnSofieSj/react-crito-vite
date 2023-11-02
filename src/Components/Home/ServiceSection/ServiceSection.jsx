import React from 'react'
import './ServiceSection.css'
import Button from '../../Generics/Button'
import backgroundlines from '@Images/waves-services.svg'
import ServiceBox from './ServiceBox'
import SectionTitle from '../../Generics/SectionTitle'

const ServiceSection = () => {

    const services =[
        {title: "Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:""},
        {title: "Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:""},
        {title: "Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:""},
        {title: "Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:""}
    ]

  return (
    <section className="services">
        <img className="waves-services" src={backgroundlines} alt="backgroundlines" />
        <div className="container">
            <SectionTitle title="Our Services" text="We Provide The Best Service For Consulting"/>
            <div className="link-boxes">
                {services.map((service, index) => (
                    <ServiceBox key={index} title={service.title} description={service.description} url={service.url}/>
                ))}                
            </div>
            <div className="center-objects"><Button type="transparent" text="Brows services" url=""/></div> 
        </div>
    </section>  )
}

export default ServiceSection