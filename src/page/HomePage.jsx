import React from 'react'
import FilterHome from '../componenets/homePageComponent/FilterHome'
import BackGround from '../componenets/UI/BackGround'
import stl from '../css/homePage.module.css'
function HomePage() {
  return (
    <section className={stl}>
      <BackGround />
      <FilterHome/>
    </section>
  )
}

export default HomePage
