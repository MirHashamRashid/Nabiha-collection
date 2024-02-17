import React from 'react';
// import SwiperCore, { Swiper,Navigation, Pagination, Autoplay } from 'swiper';
import {  SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './heroSection.css'
import { Navigation,Autoplay,EffectFade,EffectCreative,EffectFlip } from 'swiper/modules';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const HeroSection = ({ slides }) => {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper-container', {
//       loop: true,
//       autoplay: {
//         delay: 2000,
//         disableOnInteraction: false
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }, []);
   
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
       
        // pagination={{ clickable: true }}
        // fadeEffect={EffectFlip}
        className='swiper'
        modules={[Navigation,Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <img className='slide-image' src={slide.image} alt={`Image ${index + 1}`} />
            <div className="swiper-slide-caption">{slide.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default HeroSection