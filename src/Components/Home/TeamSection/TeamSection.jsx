import React from 'react'
import './TeamSection.css'

const TeamSection = () => {
  return (
    <section className="team">
        <div className="container">
            <div className="section-top">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <a className="btn-yellow" href="#">Browse Team<i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
            <div className="team-members">
                <div className="member">
                    <img src="images/kristine.png" alt="photo of kristine palmer" />
                    <h3>Kristine Parmler</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="member">
                    <img src="images/mark.png" alt="photo of mark aubri" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="member">
                    <img src="images/kimberly.png" alt="photo of kimberly hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="member">
                    <img src="images/justin.png" alt="photo of justin willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="dots">
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
                <i className="fa-duotone fa-circle" style="--fa-secondary-opacity: 0.2;"></i>
            </div>
        </div>
    </section>  )
}

export default TeamSection