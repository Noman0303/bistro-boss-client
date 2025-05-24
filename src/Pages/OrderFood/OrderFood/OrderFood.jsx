import React, { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';


const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover
                img={orderCover}
                heading={"Order Food"}
                paragraph={"Order your favorite dishes effortlessly—fresh, delicious, and delivered straight to your door! "}
            ></Cover>

            <div className="my-6">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
                </Tabs>

                {/* <div className='text-center bg-[#F3F3F3] rounded-lg'>
                    <img src={""} className='w-full h-72' alt="" />
                    <div className='px-10'>
                        <h3 className='md:text-3xl mt-8 mb-2'>Salads</h3>
                        <p>Romaine lettuce, Parmesan cheese, croutons, Caesar dressing, chicken</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-6 mb-8 text-xl rounded-lg uppercase text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
                    </div>
                </div> */}
                <div>

                </div>
                {/* <FoodCart></FoodCart> */}


            </div>


        </div>
    );
};

export default OrderFood;