import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <div>
            <div className='w-md mx-auto mb-12 mt-20 '>
                <p className='text-[#D99904] italic mb-4 border-b-2 text-center pb-4 border-[#E8E8E8]'>---From 11:00am to 10:00pm---</p>
                <p className='text-4xl text-center mt-4 border-b-2 pb-4 border-[#E8E8E8]'>ORDER ONLINE</p>

            </div>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-full my-8"
            >
                <SwiperSlide><img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-6 text-white font-cinzel'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-6 text-white font-cinzel'>Pizzas</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-6 text-white font-cinzel'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-6 text-white font-cinzel'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16 mb-6 text-white font-cinzel'>Salads</h3></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Category