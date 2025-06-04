import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavBar from '../Pages/Shared/Navbar/NavBar'

const Main = () => {
  const location = useLocation();
  console.log(location)
  if (location.pathname === '/login' || location.pathname === '/signUp' ) {
    return (
      <div>
        <Outlet></Outlet>
      </div>
    )
  } else {
    return (
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    )
  }
}

export default Main;