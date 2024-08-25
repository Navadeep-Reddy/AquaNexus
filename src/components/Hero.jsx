import React from 'react'
import '/src/styles/hero.css'

const Hero = () => {
  return (
    <div className='container flex justify-center items-center mx-auto px-10 xl:min-w-[70%] md:min-w-[80%] sm:min-w-[100%] min-h-[100vh]'>
      <div className='w-1/2 flex justify-center flex-col '>
            <h1 className='lg:text-5xl xl:text-6xl md:text-4xl sm:text-3xl font-bold leading-[1.2] text-2xl text-PrimaryBlue'>Empowering Fisheries with Data-Driven Insights</h1>
            <h2 className='text-xl font-medium mt-2 text-AccentCoral'>Centralized Access to Comprehensive Marine Data for Smarter, Species-Specific Forecasting.</h2>
            <p className='mt-5 text-TextCharcoal'>Explore a unified platform that aggregates georeferenced fish catch data, enabling researchers to dive deeper into species-specific habitat models. Our advanced search, visualization, and data management tools streamline the research process, allowing you to focus on what matters most—making informed, sustainable decisions for the future of our oceans.</p>
      </div>
      <div className='w-1/2 bg-red-300 flex justify-center'> PLaceholder</div>
    </div>
  )
}

export default Hero
