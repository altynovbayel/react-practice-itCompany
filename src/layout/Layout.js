import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Contacts from '../pages/contacts/Contacts'
import Jurist from '../pages/jurist/Jurist'
import Main from '../pages/main/Main'
import Seo from '../pages/seo/Seo'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/seo" element={<Seo/>}/>
        <Route path="/jurist" element={<Jurist/>} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path='*' element={<Navigate to={'/'}/>} />
      </Routes>
    </div>
  )
}

export default Layout
