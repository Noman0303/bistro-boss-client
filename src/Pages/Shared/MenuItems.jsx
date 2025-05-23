import React from 'react'

const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex flex-col md:flex-row gap-2'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div className='text-gray-600'>
                <h3 className="uppercase font-cinzel ">{name}----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    )
}

export default MenuItems