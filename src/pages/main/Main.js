import React from 'react'
import Footer from '../../components/footer/Footer'
import AboutMain from './main_about/AboutMain'
import HeaderMain from './main_header/HeaderMain'
import Partners from './partners/Partners'


const Main = () => {
  return (
    <>
      <HeaderMain/>
      <AboutMain/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default Main
