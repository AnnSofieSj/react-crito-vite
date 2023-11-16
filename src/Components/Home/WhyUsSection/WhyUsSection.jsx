import React from 'react'
import './WhyUsSection.css'
import chatting from '@Images/chatting.png'
import SectionTitle from '../../Generics/SectionTitle'
import HeadlineBox from './HeadlineBox'

const WhyUsSection = () => {

    const whyUsBoxes = [
        {icon: "fa-light fa-thumbs-up", title:"Process Excellence", description:"Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-hexagon", title:"Strategic Planning", description:"Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-pen-nib", title:"Experience Design", description:"Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-head-side-gear", title:"Artificial Inteligence", description:"Lorem, ipsum dolor sit amet consectetur."}
    ]

  return (
<section className="why-us">
        <div className="background-box"></div>
        <div className="container">            
            <div className="left-side">
                <SectionTitle title="Why Choose Us" text="Why We Are The Best Business Consulting Agency"/>                
                <div className="headlines">
                    {whyUsBoxes.map((boxes, index) =>(
                        <HeadlineBox key={index} icon={boxes.icon} title={boxes.title} description={boxes.description} />
                    ))}     
                </div>                
            </div>
            <div className="right-side">
                <img src={chatting} alt="two women talking at a desk holding a tablet" />                
            </div>
        </div>
    </section>  )
}

export default WhyUsSection