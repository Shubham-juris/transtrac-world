import React from 'react'
import FleetHero from '../components/fleetComponents/FleetHero'
import FleetFeatures from '../components/fleetComponents/FleetFeatures'
import FleetImageText from '../components/fleetComponents/FleetImageText'
import FleetProcess from '../components/fleetComponents/FleetProcess'
import FleetCTA from '../components/fleetComponents/FleetCTA'

const FleetPage = () => {
  return (
    <>
     <FleetHero/>
     <FleetFeatures/>
     <FleetImageText/>
     <FleetProcess/>
     <FleetCTA/> 
    </>
  )
}

export default FleetPage
