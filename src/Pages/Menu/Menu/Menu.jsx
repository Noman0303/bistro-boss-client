import React from 'react';
import { Helmet, } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import MenuItems from '../../Shared/MenuItems/MenuItems';


const Menu = () => {
    const [menu] = useMenu();
    const todayOffer = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                heading={'our menu'}
                paragraph={'Would you like to try a dish?'}
            ></Cover>

            {/* offered menu items */}
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"today's offer"}
            ></SectionTitle>
            <MenuCategory
                items={todayOffer}
                buttonDetails={"ORDER YOUR FAVOURITE FOOD"}
            ></MenuCategory>

            {/* Dessert Items */}

            <MenuCategory
                coverImg={dessertImg}
                items={dessert}
                coverHeading={"Dessert"}
                coverParagraph={"Delight in our irresistible desserts, crafted with premium ingredients for a perfect blend of flavor and sweetness"}
                buttonDetails={"ORDER YOUR FAVORITE FOOD"}
            ></MenuCategory>

            {/* Pizza Items */}

            <MenuCategory
                coverImg={pizzaImg}
                items={pizza}
                coverHeading={"Pizza"}
                coverParagraph={"Enjoy our delicious pizzas, made with fresh ingredients and a perfect balance of flavors in every bite"}
                buttonDetails={"ORDER YOUR FAVORITE FOOD"}
            ></MenuCategory>

            {/* Salad Items */}

            <MenuCategory
                coverImg={saladImg}
                items={salad}
                coverHeading={"Salad"}
                coverParagraph={"Savor our crisp and refreshing salads, packed with vibrant greens, wholesome toppings, and flavorful dressings"}
                buttonDetails={"ORDER YOUR FAVORITE FOOD"}
            ></MenuCategory>

            {/* Soup Items */}

            <MenuCategory
                coverImg={soupImg}
                items={soup}
                coverHeading={"Soup"}
                coverParagraph={"Warm up with our comforting soups, crafted with rich flavors and fresh ingredients for a soothing experience."}
                buttonDetails={"ORDER YOUR FAVORITE FOOD"}
            ></MenuCategory>


        </div>
    );
};

export default Menu;