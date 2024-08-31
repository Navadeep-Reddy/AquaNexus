import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SecondaryButton = ({ children }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='w-[160px] relative'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: "3deg" }}
        className='w-[160px] h-[40px] rounded-md font-semibold text-xl shadow-xl overflow-hidden relative'
        type='submit'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        initial={{
          backgroundColor: '#005377', // PrimaryBlue
          color: '#F5F5DC', // BackgroundSand
          border: '2px solid transparent'
        }}
        animate={{
          backgroundColor: isHover ? '#F5F5DC' : '#005377',
          color: isHover ? '#005377' : '#F5F5DC',
          border: isHover ? '2px solid #005377' : '2px solid transparent'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className='relative z-10'
          initial={{ y: 0 }}
          animate={{ y: isHover ? -30 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {children}
        </motion.span>
        <motion.span
          className='absolute inset-0 flex items-center justify-center'
          initial={{ y: 30 }}
          animate={{ y: isHover ? 0 : 30 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {children}
        </motion.span>
      </motion.button>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="size-5 absolute top-[25%] right-[10%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHover ? 1 : 0,
          y: isHover ? 0 : 10,
          color: isHover ? '#005377' : '#F5F5DC'
        }}
        transition={{ duration: 0.3 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </motion.svg>
    </div>
  )
}

export default SecondaryButton