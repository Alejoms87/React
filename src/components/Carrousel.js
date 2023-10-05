import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../styles/stylescarrousel.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function CarrouselHome() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='img1'> Prueba</SwiperSlide>
        <SwiperSlide className='img2'>Slide 2</SwiperSlide>
        <SwiperSlide className='img3'>Slide 3</SwiperSlide>
        <SwiperSlide className='img4'>Slide 4</SwiperSlide>
        <SwiperSlide className='img5'>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </>
  );
}
