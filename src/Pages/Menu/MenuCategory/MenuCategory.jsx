import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import FoodCover from '../../Shared/FoodCover/FoodCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, buttonDetails, coverHeading, coverParagraph, coverImg }) => {
    return (
        <div>
            {coverHeading && <FoodCover
                img={coverImg}
                heading={coverHeading}
                paragraph={coverParagraph}
            ></FoodCover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mx-2'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <div className='mt-8 mb-10 text-center'>
                <Link to={`/orderFood/${coverHeading}`}>
                    <button className='btn btn-outline border-0 border-b-4  text-xl rounded-lg '>{buttonDetails}</button>
                </Link>

            </div>

        </div>
    );
};

export default MenuCategory;