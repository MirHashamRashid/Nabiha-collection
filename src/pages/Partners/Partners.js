import React from 'react'
import './partners.css'
import HeroSection from '../../components/carousel-hero/HeroSection'
import Img2 from '../../assets/subbanner-2.jpg.png'
import ServicesCard from '../../components/services card/ServicesCard'
const Partners = () => {
    const partners=[
        {
            image:Img2,
            caption: 'The best services over the country'
        },
    ]
  return (
    <div className='partners-container'>
        <HeroSection slides={partners}/>
        <div className='partner-content'>
            <div className='partner-content-title'>
                <h1>Who we Work with</h1>
            </div>
            <p>We provide language translation projects of all scopes and complexity for high-impact organizations.</p>
            <span>We have been delivering high-quality language translation solutions for organizations of all sizes and all types of industries for over 35 years.</span>
           <span> We deliver high-volume and ongoing translation projects from everyday business communications, legal materials, research documents, and technical manuals.</span>
           <p> Here are some of the industries within which we are currently working.</p>
        </div>
        <section className='services-list'>
            <ServicesCard/>
        </section>
    </div>
  )
}

export default Partners