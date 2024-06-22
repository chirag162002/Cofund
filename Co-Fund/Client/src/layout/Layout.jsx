import React from 'react'
import Nav from '../components/Nav-footer/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Nav-footer/Footer'

function Layout() {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout