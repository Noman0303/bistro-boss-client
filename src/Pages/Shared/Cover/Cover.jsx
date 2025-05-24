import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({ img, heading, paragraph }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="cover image"
                strength={-200}
            >
                <div className=' py-40 '>
                    {/* // <img src={chefService} alt="" className='cover w-full min-h-36' /> */}
                    <div className='bg-gray-800/40 py-2 md:py-6 lg:py-10 xl:py-20 px-2 md:px-20 lg:px-25 xl:px-40 mx-2 md:mx-28 font-cinzel text-white'>
                        <h2 className='text-center uppercase font-bold text-2xl md:text-5xl lg:text-7xl'>{heading}</h2>
                        <p className='text-center md:font-semibold text-2xl'>{paragraph}</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;