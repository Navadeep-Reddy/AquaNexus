import React from 'react';
import Lottie from 'lottie-react';
import SecondaryButton from './SecondaryButton';
import Fish from '/src/assets/KoiFish.json';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,  // Fade out
      y: 50,        // Move down while fading
      transition: { duration: 0.5, ease: "easeInOut" },
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,   // Fade out
      x: 50,        // Move right while fading
      transition: { duration: 0.5, ease: "easeInOut" },
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,   // Fade out
      scale: 0.8,   // Shrink while fading
      transition: { duration: 0.5, ease: "easeInOut" },
    }
  };

  return (
    <motion.div 
      className='container flex flex-col md:flex-row justify-center items-center mx-auto px-10 xl:min-w-[70%] md:min-w-[80%] sm:min-w-[100%] min-h-[100vh]' 
      name="Top"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div 
        className='w-full md:w-1/2 flex justify-center flex-col'
        variants={textVariants}
      >
        <motion.h1
         whileHover = {{scale: 1.05}} 
         className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] text-PrimaryBlue'>
          Empowering Fisheries with Data-Driven Insights
        </motion.h1>
        <motion.h2 
        whileHover = {{scale: 1.03}} 
        className='text-2xl font-medium mt-2 text-AccentCoral'>
          Centralized Access to Comprehensive Marine Data for Smarter, Species-Specific Forecasting.
        </motion.h2>
        
        <motion.p
        whileHover = {{scale: 1.03}}
         className='mt-5 mb-10 text-TextCharcoal text-[18px]'>
          Explore a unified platform that aggregates georeferenced fish catch data, enabling researchers to dive deeper into species-specific habitat models. Our advanced search, visualization, and data management tools streamline the research process, allowing you to focus on what matters most—making informed, sustainable decisions for the future of our oceans.
        </motion.p>
        <Link to='General-Chart' smooth={true} duration={500} offset={-300}>
          <motion.div variants={buttonVariants}>
            <SecondaryButton>Explore</SecondaryButton>
          </motion.div>
        </Link>
      </motion.div>
      
      <motion.div 
        className='w-full md:w-1/2 flex justify-center'
        variants={textVariants}
      >
        <Lottie animationData={Fish} />
      </motion.div>
    </motion.div>
  )
}

export default Hero;
