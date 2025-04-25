import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner01 from '../../../../src/assets/home/banner01.jpg'
import banner02 from '../../../../src/assets/home/banner02.jpg'
import banner03 from '../../../../src/assets/home/banner03.png'
import banner04 from '../../../../src/assets/home/banner04.jpg'
import banner05 from '../../../../src/assets/home/banner05.png'
import banner06 from '../../../../src/assets/home/banner06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner01} />
            </div>
            <div>
                <img src={banner02} />
            </div>
            <div>
                <img src={banner03} />
            </div>
            <div>
                <img src={banner04} />
            </div>
            <div>
                <img src={banner05} />
            </div>
            <div>
                <img src={banner06} />
            </div>
            
        </Carousel>
    )
}

export default Banner;