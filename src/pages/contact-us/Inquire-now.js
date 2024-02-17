import React from 'react'
import './inquirenow.css'
import HeroSection from '../../components/carousel-hero/HeroSection'
import Img2 from '../../assets/Inquirenow-new.jpg'
import Form from '../../components/form/Form'
const InquireNow = () => {
  const partners=[
    {
        image:Img2,
        caption: 'The best services over the country'
    },
]

  return (
    <div className='contact-us-container'>
      <HeroSection slides={partners}/>
      <div className='inquire-us-main'>

        <div className='form-container'>
          <Form/>
        </div>

        <div className='info-container'>
          <h2>management offices</h2>
          <p>We have project management teams, professional translators, and content managers in most major cities throughout the entire United States, Canada, and around the world.</p>
          <span>U.S. National & International Operations</span>
          <span>ASTA-USA Translation Services, Inc.</span>
          <span>Houston, Texas</span>
          <span>Dallas, Texas</span>
          <span>Cheyenne, Wyoming</span>
          <span>Denver, Colorado</span>
        </div>
      </div>
    </div>
  )
}

export default InquireNow