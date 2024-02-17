import React from 'react'
import './swiper.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Card from './card/Card';

const SwiperComponent = ({cardData}) => {
  return (
        <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        autoplay={
          {delay:100}
        }
        modules={[Pagination]}
        className="Swiper"
      >
       {
        cardData.map((data, index) => {
          return(
            <SwiperSlide className='swiper-slide' key={index}>
                <Card data={data}/>
            </SwiperSlide>
          )
        })
       } 
       {/* {
        cardData.map((data, index) => (
          <SwiperSlide key={index}>
             <Card data={data}/>
          </SwiperSlide>
        ))
       }  */}
      </Swiper>
  )
}

export default SwiperComponent