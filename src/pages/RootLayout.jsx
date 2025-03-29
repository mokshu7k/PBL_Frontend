import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NavbarLanding from '../components/NavbarLanding';
const RootLayout = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname); 

  const isLandingOrAbout = location.pathname === '/' || location.pathname === '/about';
  return (
    <>
      
        {isLandingOrAbout? <NavbarLanding /> : <Navbar/>}
      
        <main>
          <Outlet/>
        </main>
    </>
  )
}

export default RootLayout