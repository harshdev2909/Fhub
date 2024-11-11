import React from 'react'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'
import { Footer } from '../components/Footer'
import { Carousal } from '../components/Carousal'

export const Home = () => {
  return (
    <>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <Card/>
      <div><Footer/></div>
    </>
  )
}
