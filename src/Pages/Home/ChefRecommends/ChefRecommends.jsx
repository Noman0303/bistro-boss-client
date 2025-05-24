import React from 'react';

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
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Button from '../../../components/Button/Button';

const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"chef recommends"}
            ></SectionTitle>

            {/* <div className=' mx-auto md:my-15 w-3/4 md:w-1/2 lg:w-1/4'>
                <p className='text-[#D99904] italic mb-4 border-b-2 text-center pb-4 border-[#E8E8E8]'>---From 11:00am to 10:00pm---</p>
                <p className='text-2xl md:text-4xl text-center mt-4 border-b-2 pb-4 border-[#E8E8E8]'>ORDER ONLINE</p>
            </div> */}
            {/* in order to avoid repeat coding we made section title component */}


            <Swiper
                slidesPerView={3}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-full my-8"
            >
                <SwiperSlide>
                    <div className='text-center bg-[#F3F3F3] rounded-lg'>
                        <img src={slide1} className='w-full h-72' alt="" />
                        <div className='px-10'>
                            <h3 className='md:text-3xl mt-8 mb-2'>Salads</h3>
                            <p>Romaine lettuce, Parmesan cheese, croutons, Caesar dressing, chicken</p>
                            <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-[#F3F3F3] rounded-lg'>
                        <img src={slide2} className='w-full h-72' alt="" />
                        <div className='px-10'>
                            <h3 className='md:text-3xl mt-8 mb-2'>Pizzas</h3>
                            <p>tomato sauce, mozzarella cheese, oregano, pepperoni toppings, mushrooms</p>
                            <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-[#F3F3F3] rounded-lg'>
                        <img src={slide3} className='w-full h-72' alt="" />
                        <div className='px-10'>
                            <h3 className='md:text-3xl mt-8 mb-2'>Soups</h3>
                            <p>Broth, vegetables , salt, pepper, herbs </p>
                            <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-center bg-[#F3F3F3] rounded-lg'>
                        <img src={slide4} className='w-full h-72' alt="" />
                        <div className='px-10'>
                            <h3 className='md:text-3xl mt-8 mb-2'>Desserts</h3>
                            <p>Sugar, flour, butter, eggs, vanilla</p>
                            <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ChefRecommends;


