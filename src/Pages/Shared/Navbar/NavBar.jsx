import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { IoCartOutline } from "react-icons/io5";
import useCart from '../../../Hooks/useCart';



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navlinks =
        <>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/contact'>CONTACT US</NavLink></li>
            <li><NavLink to='/menu'>OUR MENU</NavLink></li>
            <li><NavLink to='/orderFood/salad'>ORDER FOOD</NavLink></li>

            <li><NavLink to='/dashboard/cart'>
                <button className=' items-center flex gap-2 hover:cursor-pointer '> <IoCartOutline  className='h-5 w-5'/>
                {/* <span className='badge badge-md badge-primary'>+{cart.length}</span> */}
                    <div className='badge badge-md badge-primary'>+{cart.length}</div>
                </button>
            </NavLink></li>
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
                    <h2 className='font-cinzel text-white text-xl md:text-3xl font-extrabold '>BISTRO BOSS</h2>
                    <p className='font-cinzel text-white text-2xl font-medium tracking-[3px] md:tracking-[9.12px]'>Restaurant</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-white font-semibold ">
                    {navlinks}
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ?
                        <>
                            <img src={user?.photoURL} alt="" className="h-11 mx-2 rounded-xl" />
                            <p className='text-white mx-2'>{user?.displayName}</p>
                            <button onClick={handleLogOut} className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] rounded-xl text-lg  md:text-xl ">LogOut</button>
                        </>
                        :
                        <>

                            <Link to='/login'><button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] rounded-xl text-lg md:text-xl ">Login</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default NavBar