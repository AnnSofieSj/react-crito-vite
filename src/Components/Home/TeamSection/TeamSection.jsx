import React from 'react'
import './TeamSection.css'
import Button from '../../Generics/Button'
import kristine from '@Images/kristine.png'
import mark from '@Images/mark.png'
import kimberly from '@Images/kimberly.png'
import justin from '@Images/justin.png'

const TeamSection = () => {
  return (
    <section className="team">
        <div className="container">
            <div className="section-top">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <Button type="yellow" text="Browse Team" url=""/>
            </div>
            <div className="team-members">
                <div className="member">
                    <img src={kristine} alt="photo of kristine palmer" />
                    <h3>Kristine Parmler</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="member">
                    <img src={mark} alt="photo of mark aubri" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="member">
                    <img src={kimberly} alt="photo of kimberly hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="member">
                    <img src={justin} alt="photo of justin willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            {/* <div className="dots">
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
            </div> */}
        </div>
    </section>  )
}

export default TeamSection