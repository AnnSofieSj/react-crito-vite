import React from 'react'
import './AboutSection.css'
import brown from '@Images/samanthabrown.png'
import wavesAbout from '@Images/waves-about.svg'
import Button from '../../Generics/Button'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className="about">        
    <div className="container">                        
        <div className="content-left">   
            <img className="waves-about" src= {wavesAbout} alt="backgroundlines" />             
            <img src={brown} alt="founder samantha brown walking along the corridor carrying a laptop" />
            <div className="blue-box">
                <p id="brown">Samantha Brown,</p>
                <p id="founder">founder</p>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="content-right">
            <p id="about">About Company</p>
            <h2>
                We Are Business Consulting & Credit Repair Experts
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>                
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
            <Button type="black" text="Learn more" url=""/>
            <Link className="btn-intro" to="/intro"><i className="fa-sharp fa-solid fa-play"></i></Link>
            <p className="intro">Intro Video</p>
        </div>
    </div>
</section>
  )
}

export default AboutSection