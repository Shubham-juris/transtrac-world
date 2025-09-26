import React from 'react'
import HeroSection from '../components/servicesComponents/HeroSection'
import ServiceGrid from '../components/servicesComponents/ServiceGrid'
import ImageWithText from '../components/servicesComponents/ImageWithText'
import ProcessSteps from '../components/servicesComponents/ProcessSteps'
import FAQSection from '../components/servicesComponents/FAQSection'

const ServicesPage = () => {
  return (
    <>
      <HeroSection/>
      <ServiceGrid/>
      <ImageWithText/>
      <ProcessSteps/>
      <FAQSection/>
    </>
  )
}

export default ServicesPage
