import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Fresher Machine Learning Model Developer with knowledge of Artificial Intelligence.Throught my acadamic Journey i learned alot in Machine Learning form theory to its algorithm.</p>
                    <p>Worked on projects form basic to intermediate which helped to understand this field with its insight of its basic.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>MACHINE LEARNING</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>ARTIFICIAL INTELLIGENCE</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>PYTHON & ML LIBRARIES</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About