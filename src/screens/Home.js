import React from 'react'
import { Navbar } from '../components/Navbar'
import Card from '../components/Card'
import { Footer } from '../components/Footer'
import { Carousal } from '../components/Carousal'
import CartContextProvider from '../context/CartContextProvider'

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Carousal/>
      <Card/>
      <Footer/>
    </>
  )
}
