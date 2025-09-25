import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

const RoutesPage = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
                <Route path="about-us" element={<AboutPage/>}/>

      </Routes> 
    </>
  )
}

export default RoutesPage
