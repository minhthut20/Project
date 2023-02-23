import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import {Outlet} from 'react-router-dom'

export default function Container() {
  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
      
  )
}
