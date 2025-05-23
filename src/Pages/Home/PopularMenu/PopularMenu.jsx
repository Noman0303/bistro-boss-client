import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItems from '../../Shared/MenuItems';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('../../../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <div className="mb-12">
            <SectionTitle
                subHeading="---Check it out---"
                heading="from our menu"
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mx-2'>
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='mt-4 text-center'>
                <button className='btn btn-outline border-0 border-b-4 mt-4 text-xl rounded-lg '>View Full Menu</button>
            </div>


        </div>
    )
}

export default PopularMenu