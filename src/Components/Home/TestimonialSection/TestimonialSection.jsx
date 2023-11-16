import React from 'react'
import './TestimonialSection.css'
import cassandra from '@Images/cassandra.png'
import amanda from '@Images/amanda.png'
import jack from '@Images/jack.png'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'
import ContentBox from './ContentBox'

const TestimonialSection = () => {

    const contentboxes = [
        {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", image:`${cassandra}`, altText:"photo of cassandra warren", name:"Cassandra Warren", description:"Business Manager, Dorfus"},
        {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", image:`${amanda}`, altText:"photo of Amanda Tulling", name:"Amanda Tulling", description:"Senior Developer, Square"},
        {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", image:`${jack}`, altText:"photo of Jack McDogglas", name:"Jack McDogglas", description:"Key Account Manager, Gobona"}
    ]

  return (
<section className="testimonial">
        <div className="container">
            <SectionTitle title="Testimonial" text="What Our Client Says"/>           
            <div className="users">
                {contentboxes.map((boxes, index) => (
                    <ContentBox key={index} text={boxes.text} image={boxes.image} altText={boxes.altText} name={boxes.name} description={boxes.description} />
                ))}                
            </div>
            <div className="center-objects"><Button type="black" text="All Reviews"/></div>
        </div>
    </section>  )
}

export default TestimonialSection