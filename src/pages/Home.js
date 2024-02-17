import React from 'react'
import './home.css'
import SwiperComponent from '../components/SwiperComponent';
import Pharagraph from '../components/paragraphs/Pharagraph';
const Home = () => {
  const data = [
      {
          title:'Business Translation Services',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
      {
          title:'Business imporvement',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
      {
          title:'Business monitoring services',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
      {
          title:'Business monitoring services',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
      {
          title:'Business monitoring services',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
      {
          title:'Business monitoring services',
          text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
      },
  ];
  return (
    <div className='home-container'>
      <div className='home-hero-section'>
        <div className='home-message'>
        <h1>We understand your needs and concerns</h1>
          <p>we are best in class and public service organization</p>
        </div>
      </div>
      {/* <div className='swiper-container'>
        <SwiperComponent/>
      </div> */}
      

      <Pharagraph/>
     
      
      <div className='cards-view-container'>
        <h1>Learn More about specialized translation services:</h1>
          <div className='cards-view'> 
            <SwiperComponent cardData={data}/>
          </div>
      </div>
    </div>
  )
}

export default Home;