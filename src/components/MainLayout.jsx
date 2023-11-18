import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import AppTittle from './AppTittle'
import DarkMood from './DarkMood'

const MainLayout = () => {
  return (
    <div >
          <Nav/>
          <DarkMood/>
          <AppTittle/>
         <Outlet/>
    </div>
   
  )
}

export default MainLayout