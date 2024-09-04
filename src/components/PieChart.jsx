import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MyPieChart from './ChartComponents/MyPieChart';
import Title from '../components/Title';
import PieMap from './PieMap';

const temp_data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const temp_dist = ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6']

const PieChart = ({ GetChartData }) => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Title Title={'Pie Chart'} Subtitle={'Graphical representation of aquatic data'} />

      <motion.div
        ref={containerRef}
        className="flex flex-col lg:flex-row lg:flex-wrap lg:w-[90%] my-24 mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        animate={isContainerInView ? 'visible' : 'hidden'}
      >
        <motion.div
          ref={chartRef}
          className="w-full lg:w-1/2 flex-grow mb-5 lg:mb-0"
          variants={chartVariants}
          initial="hidden"
          animate={isChartInView ? 'visible' : 'hidden'}
        >
          <MyPieChart data={temp_data} />
        </motion.div>

        <motion.div
          ref={mapRef}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center"
          variants={mapVariants}
          initial="hidden"
          animate={isMapInView ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-2xl font-semibold text-PrimaryBlue">
              Distribution of Fish Species Catch Weight by Selected Location
            </h1>
            <p className="font-medium">
              Visualizing the Proportion of Catch Weight for Various Species in the Selected Area
            </p>
          </div>

          <div className="w-full flex items-center flex-col">
            <select className="h-[30px] lg:w-[450px] w-[250px] px-2 font-medium my-5 rounded-md bg-PrimaryBlue text-BackgroundSand">
              <option selected disabled hidden>
                Choose Area
              </option>
              {temp_dist.map((key, index) => {
                return(<option key = {index}>{key}</option>)
              })}
            </select>
            <PieMap position={position} setPosition={setPosition} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PieChart;
