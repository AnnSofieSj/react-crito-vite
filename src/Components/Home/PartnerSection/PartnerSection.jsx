import React from 'react'
import './PartnerSection.css'
import paperz from '@Images/paperz.png'
import dorfus from '@Images/dorfus.png'
import martino from '@Images/martino.png'
import square from '@Images/square.png'
import gobona from '@Images/gobona.png'
import Partner from './Partner'


const PartnerSection = () => {

    const partners =[
      {image:`${paperz}`, altText:"logotype of paperz"},
      {image:`${dorfus}`, altText:"logotype of dorfus"},
      {image:`${martino}`, altText:"logotype of martino"},
      {image:`${square}`, altText:"logotype of square"},
      {image:`${gobona}`, altText:"logotype of gobona"}
    ]

  return (
    <>
      <section className="partners">
          <div className="container">
              {partners.map((partner, index) =>(
                <Partner key={index} image={partner.image} altText={partner.altText}/>
              ))}            
          </div>
      </section>
    </>
  )
}

export default PartnerSection