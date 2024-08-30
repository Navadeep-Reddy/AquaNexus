import React from 'react'
import Lottie from 'lottie-react'
import SecondaryButton from './SecondaryButton'
import Fish from '/src/assets/KoiFish.json'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='container flex flex-col md:flex-row justify-center items-center mx-auto px-10 xl:min-w-[70%] md:min-w-[80%] sm:min-w-[100%] min-h-[100vh]' name ="Top">
      <div className='w-full md:w-1/2 flex justify-center flex-col'>
        <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] text-PrimaryBlue'>
          Empowering Fisheries with Data-Driven Insights
        </h1>
        <h2 className='text-2xl font-medium mt-2 text-AccentCoral'>
          Centralized Access to Comprehensive Marine Data for Smarter, Species-Specific Forecasting.
        </h2>
        <p className='mt-5 mb-10 text-TextCharcoal text-[18px]'>
          Explore a unified platform that aggregates georeferenced fish catch data, enabling researchers to dive deeper into species-specific habitat models. Our advanced search, visualization, and data management tools streamline the research process, allowing you to focus on what matters most—making informed, sustainable decisions for the future of our oceans.
        </p>
        <Link to='General-Chart' smooth={true} duration={500} offset={-300}><SecondaryButton>Explore</SecondaryButton></Link>
      </div>
      <div className='w-full md:w-1/2 flex justify-center'>
        <Lottie animationData={Fish} />
      </div>
    </div>
  )
}

export default Hero
