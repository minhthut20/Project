import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import TakeAction from '../thoiSu/ThoiSu'
import Banner from './Banner'

export default function Index() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <TakeAction></TakeAction>
      <Contact></Contact>
    </>
  )
}
