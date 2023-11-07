import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import AppTittle from './AppTittle'

const MainLayout = () => {
  return (
    <div>
          <Nav/>
          <AppTittle/>
         <Outlet/>
    </div>
   
  )
}

export default MainLayout