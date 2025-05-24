import React from 'react';

const FoodCard = ({item}) => {
     const { name, image, price, recipe } = item;
    return (
        <div>
            <div className='text-center bg-[#F3F3F3] relative '>
                <img src={image} className='w-full h-72 ' alt="" />
                <div className='px-10 h-60'>
                    <h3 className='md:text-3xl mt-8 mb-2'>{name}</h3>
                    <p>{recipe}</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506] hover:bg-[#111827]'>add to cart</button>
                </div>
                <p className="text-white bg-[#111827] font-semibold py-2.5 px-6 w-22 absolute top-5   right-5">${price}</p>
            </div>

        </div>
    );
};

export default FoodCard;