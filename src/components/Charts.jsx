import React from 'react'
import MyLineChart from './ChartComponents/MyLineChart'
import MyPieChart from './ChartComponents/MyPieChart'


const Charts = () => {
  return (
    <div className='flex lg:w-[90%] mx-auto my-[10vh]'>
        <div className='w-1/2 '>
            <MyLineChart />
        </div>
        <div>
            <MyPieChart />
        </div>
    </div>
  )
}

export default Charts