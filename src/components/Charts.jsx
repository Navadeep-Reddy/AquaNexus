import React from 'react'
import MyLineChart from './ChartComponents/MyLineChart'
import MyPieChart from './ChartComponents/MyPieChart'

const Charts = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:w-[90%] mx-auto my-[10vh]' name = "General-Chart">
      <div className='w-full lg:w-1/2 h-[300px] mb-4 lg:mb-0'>
        <MyLineChart />
      </div>
      <div className='w-full lg:w-1/2 h-[300px]'>
        <MyPieChart />
      </div>
    </div>
  )
}

export default Charts;