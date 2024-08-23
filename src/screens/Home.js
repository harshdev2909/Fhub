import React from 'react'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'
import { Footer } from '../components/Footer'
import { Carousal } from '../components/Carousal'

export const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className='m-3'><Card/></div>
      <div><Footer/></div>
    </div>
  )
}
