import React from 'react'
import './PartnerSection.css'
import paperz from '@Images/paperz.png'
import dorfus from '@Images/dorfus.png'
import martino from '@Images/martino.png'
import square from '@Images/square.png'
import gobona from '@Images/gobona.png'


const PartnerSection = () => {
  return (
    <>
      <section className="partners">
          <div className="container">
              <img src={paperz} alt="logotype of paperz" />
              <img src={dorfus} alt="logotype of dorfus" />
              <img src={martino} alt="logotype of martino" />
              <img src={square} alt="logotype of square" />
              <img src={gobona} alt="logotype of gobona" />            
          </div>
      </section>
    </>
  )
}

export default PartnerSection