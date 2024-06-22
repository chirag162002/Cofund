import React from 'react'
import Main from './Main'
import CompanyList from '../Company/CompanyList'
import WhyCoFund from './WhyCoFund'
import Testimonial from "./Testimonial"
import FAQ from './FAQ'

function Home() {
  return (
    <>
      <Main />
      <CompanyList/>
      <WhyCoFund/>
      <Testimonial/>
      <FAQ/>
    </>
  )
}

export default Home