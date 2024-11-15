import React from 'react'
import NavBar from './partials/NavBar'
import HeaderMain from './partials/HeaderMain'
import LearnMore from './partials/LearnMore'

const Home = () => {
  return (
    <>
    <div className='w-full h-max overflow-auto'>
    <NavBar/>
    <HeaderMain/>
    <LearnMore/>
    
    </div>
   
    </>
  )
}

export default Home

