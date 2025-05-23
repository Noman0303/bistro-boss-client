import React, { useEffect, useState } from 'react'
import chefService from '../../../assets/home/chefService.jpg'

const Banner2 = () => {

    return (
        <div className=' my-4 md:my-24 min-h-screen py-40' style={{
            backgroundImage: `url(${chefService})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            {/* // <img src={chefService} alt="" className='cover w-full min-h-36' /> */}
            <div className='bg-white py-2 md:py-6 lg:py-10 xl:py-20 px-2 md:px-20 lg:px-25 xl:px-40 mx-2 md:mx-28 font-cinzel '>
                <h2 className='text-center text-2xl md:text-5xl'>Bistro Boss</h2>
                <p className='text-center '>"At Bistro Boss, every dish is more than just a meal—it’s an experience. Our Chef’s Specials bring together the finest ingredients, expert craftsmanship, and a touch of creativity to deliver unforgettable flavors."
                </p>
            </div>
        </div>
    )
}

export default Banner2