import React from 'react'
import './TeamSection.css'
import Button from '../../Generics/Button'
import kristine from '@Images/kristine.png'
import mark from '@Images/mark.png'
import kimberly from '@Images/kimberly.png'
import justin from '@Images/justin.png'
import SectionTitle from '../../Generics/SectionTitle'
import MemberBox from './MemberBox'

const TeamSection = () => {

    const MemberBoxes = [
        {image: `${kristine}`, altText:"photo of kristine palmer", title:"Kristine Parmler", description:"Chef Operation Officer"},
        {image: `${mark}`, altText:"photo of mark aubri", title:"Mark Aubri", description:"Senior Consultant"},
        {image: `${kimberly}`, altText:"photo of kimberly hansen", title:"Kimberly Hansen", description:"Senior Consultant"},
        {image: `${justin}`, altText:"photo of justin willoman", title:"Justin Willoman", description:"Senior Tech Consultant"}
    ]

  return (
    <section className="team">
        <div className="container">
            <div className="section-top">
                <SectionTitle title="Meet Our Team" text="Experience Team Members"/>                
                <Button type="yellow" text="Browse Team" url=""/>
            </div>
            <div className="team-members">
                {MemberBoxes.map((boxes, index) => (
                    <MemberBox key={index} image={boxes.image} altText={boxes.altText} title={boxes.title} description={boxes.description} />
                ))}               
            </div>            
        </div>
    </section>  )
}

export default TeamSection