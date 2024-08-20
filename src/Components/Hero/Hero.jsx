import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ankit2.jpeg'
import resume_pdf from '../../assets/resume2.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I m Ankit Patel,</span>full stack developer. </h1>
        <p>I am a fullstack developer from Gujarat,India. </p>
        <div className="hero-action">
            <div className="hero-connect">
               <AnchorLink className="connect-link" href='#contact'>connect with me</AnchorLink> 
            </div>
            <button className="hero-resume">
                <a href={resume_pdf} download='resume_pdf' > Download resume</a>
            </button>
        </div>
         </div>
       
  )
}

export default Hero