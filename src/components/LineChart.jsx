import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import MyLineChart from './ChartComponents/MyLineChart';
import FilterBox from './FilterBox';

const line_server_data = [
  { date: '2024-08-01', "Indian Mackarel": 4200, Catla: 3800, "Rohu": 3200, "Walking catfish": 2800, "Hilsa": 2500, "Green Chromide": 3000 },
  { date: '2024-08-02', "Indian Mackarel": 3500, Catla: 4300, "Rohu": 2100, "Walking catfish": 3400, "Hilsa": 1900, "Green Chromide": 2700 },
  { date: '2024-08-03', "Indian Mackarel": 2600, Catla: 3000, "Rohu": 4000, "Walking catfish": 2000, "Hilsa": 3800, "Green Chromide": 3200 },
  { date: '2024-08-04', "Indian Mackarel": 3700, Catla: 2900, "Rohu": 2900, "Walking catfish": 4100, "Hilsa": 3100, "Green Chromide": 2800 },
  { date: '2024-08-05', "Indian Mackarel": 2800, Catla: 4100, "Rohu": 3500, "Walking catfish": 3300, "Hilsa": 2300, "Green Chromide": 4000 },
  { date: '2024-08-06', "Indian Mackarel": 3900, Catla: 2500, "Rohu": 2700, "Walking catfish": 2600, "Hilsa": 2200, "Green Chromide": 3300 },
  { date: '2024-08-07', "Indian Mackarel": 3200, Catla: 3600, "Rohu": 3100, "Walking catfish": 2900, "Hilsa": 2700, "Green Chromide": 3500 },
];

const Charts = () => {
  const [selectedLineData, setSelectedItemsLineData] = useState([]);
  const containerRef = React.useRef(null);
  const chartRef = React.useRef(null);
  const filterBoxRef = React.useRef(null);

  const isContainerInView = useInView(containerRef, { once: true, amount: 0.5 });
  const isChartInView = useInView(chartRef, { once: true, amount: 0.5 });
  const isFilterBoxInView = useInView(filterBoxRef, { once: true, amount: 0.5 });

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

  const filterBoxVariants = {
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
      className='flex flex-col lg:flex-row lg:w-[90%] mx-auto mb-[15vh] h-[600px] justify-center items-center' 
      name="General-Chart"
      variants={containerVariants}
      initial="hidden"
      animate={isContainerInView ? "visible" : "hidden"}
    >
      <motion.div 
        ref={chartRef}
        className='w-full lg:w-1/2 h-[300px] my-4 lg:mb-0'
        variants={chartVariants}
        initial="hidden"
        animate={isChartInView ? "visible" : "hidden"}
      >
        <MyLineChart 
          data={line_server_data} 
          selectedItems={selectedLineData} 
          SetSelectedItems={setSelectedItemsLineData}
        />
      </motion.div>
      <motion.div 
        ref={filterBoxRef}
        className='w-full lg:w-1/2 h-[300px] lg:mx-10'
        variants={filterBoxVariants}
        initial="hidden"
        animate={isFilterBoxInView ? "visible" : "hidden"}
      >
        <div className='flex flex-col items-center my-5'>
          <h1 className='text-2xl font-semibold text-PrimaryBlue'>Fish Catch Trends Over Time</h1>
          <p className='font-medium'>Analyzing Fish Catch Weight Across The Date Range</p>
        </div>
        <FilterBox 
          data={line_server_data} 
          selectedItems={selectedLineData} 
          SetSelectedItems={setSelectedItemsLineData}
        />
      </motion.div>
    </motion.div>
  );
}

export default Charts;
