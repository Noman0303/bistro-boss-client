import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { PiListStarFill } from "react-icons/pi";
import { TbCalendarCheck } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import useCart from '../Hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className='flex lg:flex-row'>
            {/* Dashboard Side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <h2 className='font-extrabold text-2xl mt-12 text-center'>BISTRO BOSS</h2>
                <h3 className='font-bold uppercase mb-14 tracking-[3px] md:tracking-[5.8px] text-center'>Restaurant</h3>
                <ul className="menu border-b-2 pb-6 border-b-white ml-5">
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard'><IoHomeSharp /> User Home</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/reservation'><FaCalendarAlt /> reservation</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/payment'><GiWallet /> payment history</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/cart'><FaShoppingCart /> my cart ({cart.length}) </NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/review'><PiListStarFill /> add review</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/booking'><TbCalendarCheck /> my booking</NavLink></li>
                </ul>

                <ul className="menu pt-6 ml-5">
                    <li className="uppercase hover:text-white" ><NavLink to='/'><IoHomeSharp />Home</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/menu'><IoMenu /> menu</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/orderFood/salad'><GiShoppingBag /> shop</NavLink></li>
                    <li className="uppercase hover:text-white" ><NavLink to='/dashboard/contact'><FaEnvelope /> contact</NavLink></li>
                    
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1 min-h-screen' >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;