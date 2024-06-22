import React from 'react'
import main from '../../assets/main-image.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <section className="text-gray-600 body-font bg-blue-100 rounded-lg sm:mx-16 sm:my-4">
      <div className="main-section container mx-auto flex px-10 py-0 md:flex-row flex-col items-center" >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
          Invest in Innovation with Confidence
            {/* <br className="hidden lg:inline-block" /><span className='text-4xl'> Bridging Dreams to Business Success.
</span> */}
          </h1>
          <p className="mb-8 leading-relaxed">
          Join us in shaping the future by investing boldly in innovative ventures, backed by our trusted platform's expertise and support.

          </p>
          <div className="flex gap-4">
            
            <Link to="/startups" ><button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore</button></Link>
            <button className=" text-gray-900 bg-gray-100 border-2 py-2 px-6 focus:outline-none hover:border-blue-600 hover:bg-blue-50 rounded text-lg">Contact Us</button>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full">
            <img className="object-cover object-center rounded" alt="hero" src={main} />
        </div>

      </div>
    </section>
    </>
  )
}

export default Main