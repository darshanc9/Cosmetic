import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://static.vecteezy.com/system/resources/previews/002/123/391/non_2x/realistic-cosmetic-advertisement-editable-banner-vector.jpg' className='w-[100%] h-[100%] content-center object-cover '/></SwiperSlide>
        <SwiperSlide><img src='https://static.vecteezy.com/system/resources/previews/002/434/893/non_2x/3d-realistic-natural-beauty-cosmetic-product-free-vector.jpg' className='w-full h-[70%]'/></SwiperSlide>
        <SwiperSlide><img src='https://static.vecteezy.com/system/resources/previews/001/257/352/non_2x/golden-podium-for-cosmetic-ads-collection-with-ribbon-vector.jpg' className='w-full h-[70%]'/></SwiperSlide>
      </Swiper>
    </>
  );
}