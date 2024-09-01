import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MyPieChart from './ChartComponents/MyPieChart';
import Map from './Map';

const PieChart = () => {
  const [position, setPosition] = useState(null);
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const mapRef = useRef(null);

  const isContainerInView = useInView(containerRef, { once: true, amount: 0.5 });
  const isChartInView = useInView(chartRef, { once: true, amount: 0.5 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className='flex flex-col lg:flex-row lg:w-[90%] mx-auto mb-24'
      variants={containerVariants}
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
    >
      <motion.div 
        ref={chartRef}
        className='w-full lg:w-1/2 flex-grow'
        variants={chartVariants}
        initial="hidden"
        animate={isChartInView ? "visible" : "hidden"}
      >
        <MyPieChart />
      </motion.div>

      <motion.div 
        ref={mapRef}
        className='w-full lg:w-1/2 flex flex-col items-center my-5 lg:mx-10'
        variants={mapVariants}
        initial="hidden"
        animate={isMapInView ? "visible" : "hidden"}
      >
        <div className='flex flex-col items-center mb-10'>
          <h1 className='text-2xl font-semibold text-PrimaryBlue'>
            Distribution of Fish Species Catch Weight by Selected Location
          </h1>
          <p className='font-medium'>
            Visualizing the Proportion of Catch Weight for Various Species in the Selected Area
          </p>
        </div>

        <div className='w-full flex justify-center'>
          <Map position={position} setPosition={setPosition} />
        </div>

      </motion.div>
    </motion.div>
  );
};

export default PieChart;
