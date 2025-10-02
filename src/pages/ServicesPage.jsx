import React from 'react'
import HeroSection from '../components/servicesComponents/HeroSection'
import ServiceGrid from '../components/servicesComponents/ServiceGrid'
import ImageWithText from '../components/servicesComponents/ImageWithText'
import ProcessSteps from '../components/servicesComponents/ProcessSteps'
import FAQSection from '../components/servicesComponents/FAQSection'
import Rentals from '../components/servicesComponents/Rentals'

const ServicesPage = () => {
  return (
    <>
      <HeroSection/>
      <ServiceGrid/>
      <Rentals/>
      <ImageWithText/>
      <ProcessSteps/>
      <FAQSection/>
    </>
  )
}

export default ServicesPage
