import React from 'react'
import { motion } from 'framer-motion'

const SecondaryButton = ({children}) => {
  return (
    
      <motion.button whileHover = {{scale: 1.05}} 
      whileTap = {{scale: 0.9, rotate: "10deg"}}
      className='border-none w-[160px] h-[40px] rounded-md bg-PrimaryBlue font-semibold text-xl text-BackgroundSand shadow-md' type='submit'
       >
        {children}
      
      </motion.button>
  )
}

export default SecondaryButton
