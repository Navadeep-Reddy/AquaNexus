import {React, useState} from 'react'
import MyLineChart from './ChartComponents/MyLineChart'
import MyPieChart from './ChartComponents/MyPieChart'
import FilterBox from './FilterBox'

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
  const [selectedLineData, SetSelectedItemsLineData] = useState([]);

  return (
    <div className='flex flex-col lg:flex-row lg:w-[90%] mx-auto my-[10vh]' name = "General-Chart">
      <div className='w-full lg:w-1/2 h-[300px] mb-4 lg:mb-0'>
        <MyLineChart data = {line_server_data} selectedItems = {selectedLineData} SetSelectedItems = {SetSelectedItemsLineData}/>
      </div>
      <div className='w-full lg:w-1/2 h-[300px]'>
        <FilterBox data = {line_server_data} selectedItems = {selectedLineData} SetSelectedItems = {SetSelectedItemsLineData}/>
      </div>
    </div>
  )
}

export default Charts;