import React from 'react';
// import SwiperCore, { Swiper,Navigation, Pagination, Autoplay } from 'swiper';
import {  SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './heroSection.css'
import { Navigation,Autoplay} from 'swiper/modules';

const HeroSection = ({ slides }) => {
   
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        className='swiper'
        modules={[Navigation,Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <img className='slide-image' src={slide.image} alt={`hero ${index + 1}`} />
            <div className="swiper-slide-caption">{slide.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default HeroSection