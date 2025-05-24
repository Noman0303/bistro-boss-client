import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {

    const navlinks =
        <>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/'>CONTACT US</NavLink></li>
            <li><NavLink to='/'>DASHBOARD</NavLink></li>
            <li><NavLink to='/menu'>OUR MENU</NavLink></li>
            <li><NavLink to='/orderFood'>ORDER FOOD</NavLink></li>
        </>

    return (
        <div className="navbar max-w-7xl fixed z-10 shadow-sm bg-[#15151580] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text ">
                        {navlinks}
                    </ul>
                </div>
                <div className='ml-4'>
                    <h2 className='font-cinzel text-white text-2xl md:text-3xl font-extrabold'>BISTRO BOSS</h2>
                    <p className='font-cinzel text-white text-2xl font-medium tracking-[9.12px]'>Restaurant</p>
                </div>

            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-white font-semibold ">
                    {navlinks}
                </ul>
                <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white text- ">SIGN IN</button>
            </div>
        </div>
    )
}

export default NavBar