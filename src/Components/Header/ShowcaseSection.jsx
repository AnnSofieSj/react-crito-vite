import React from 'react'
import backgroundlines from '../../assets/Images/waves-showcase.svg'
import img_showcase from '../../assets/Images/showcase.svg'
import Button from '../Generics/Button'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
    <img className="backgroundlines" src={backgroundlines} alt="backgroundlines" />
        <div className="container"> 
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button type="yellow" text="Get consulting" url=""/>
                <Button type="transparent" text="Learn more" url=""/>
            </div>
            <img src={img_showcase} alt="image of man in a suit looking at a tablet" />
        </div>
    </section>
  )
}

export default ShowcaseSection