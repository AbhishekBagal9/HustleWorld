import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
const MainLayout = () => {
  return (
    <div><Navbar/>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default MainLayout