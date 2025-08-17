import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Pratik Jha,</span> Machine Learning Developer based in India.</h1>
      <p>I am Fresher Machine Learning Developer form Bihar, India currently pursuing my B.tech in Data Science.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero