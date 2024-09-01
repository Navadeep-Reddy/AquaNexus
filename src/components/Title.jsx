import React from 'react'
import { motion, useInView } from 'framer-motion'

const Title = ({ Title, Subtitle }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true})

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2 
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      ref={ref}
      className='w-full flex flex-col justify-center items-center mt-10'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={containerVariants}
    >
      <motion.h1 
        className='text-5xl font-bold text-PrimaryBlue'
        variants={itemVariants}
      >
        {Title}
      </motion.h1>
      <motion.p 
        className='text-TextCharcoal font-medium'
        variants={itemVariants}
      >
        {Subtitle}
      </motion.p>
    </motion.div>
  )
}

export default Title