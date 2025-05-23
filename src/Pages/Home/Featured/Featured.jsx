import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className='bg-fixed bg-cover featured-item text-white pt-8 my-20'>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={"featured item"}
            ></SectionTitle>
            <div className='flex flex-col lg:flex-row bg-black-100/10 item-center justify-center py-2 md:py-8 lg:py-20 px-2 md:px-16 lg:px-36 gap-4 my-4 text-white'>
                <img src={featuredImage} className='lg:w-lg xl:w-2xl md:h-96' alt="" />
                <div className='my-auto gap-2'>
                    <p className='text-2xl'>May 18, 2025</p>
                    <p className='text-2xl uppercase'>where can i get some ?</p>
                    <p className='italic text-lg'>Craving something delicious? Find out where you can get your hands on our top-rated dishes, crafted with care and bursting with flavor! Every bite is a journey of taste, waiting to be savored.</p>
                    <button className='border-0 border-b-3 p-4 rounded-lg mt-4 text-2xl btn btn-outline'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;