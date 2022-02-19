import React from 'react'
import './About.css';
import photography from '../../images/photography.jpg'
import Award from '../../images/award.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about__left">
            <div className="about__left-card bg"></div>
            <div className="about__left-card">
                <img src={photography} alt="" className='about__left-card-img' />
            </div>
        </div>
        
        <div className="about__right">
        <p className="about-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="about__award">
          <img src={Award} alt="award-img" className="about__award-img" />
          <div className="about__award-texts">
            <h4 className="about__award-title">International Design Awards 2021</h4>
            <p className="about__award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About