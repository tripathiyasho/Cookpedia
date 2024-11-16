import React from 'react'
import NavBar from './partials/NavBar'
import HeaderMain from './partials/HeaderMain'
import LearnMore from './partials/LearnMore'
import Subscribe from './partials/Subscribe'
import Card from './partials/Card'
import RecipeHome from './partials/RecipeHome'
const Home = () => {
  return (
    <>
    <div className='w-full h-auto overflow-auto'>
    <NavBar/>
    <HeaderMain/>
    <RecipeHome/>
    <LearnMore/>
    <Subscribe/>

    </div>
   
    </>
  )
}

export default Home

