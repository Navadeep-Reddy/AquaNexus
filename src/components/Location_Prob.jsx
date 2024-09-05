import {React, useState} from 'react';
import Title from '../components/Title';
import MyBarChart from './ChartComponents/MyBarChart';
import LocMap from '/home/navadeep/Documents/AquaNexus/src/components/LocMap.jsx'

const temp_data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Location_Prob = () => {
  const [position, setPostition] = useState(null);
  return (
    <div className='mb-28'>
      <Title Title={"Forecast"} Subtitle={"Predicting fish occurrence probabilities"} />
      <div className='my-28 w-[90%] mx-auto flex'>
        <div className='w-1/2'>
         <MyBarChart data={temp_data}/>
        </div>
        <div className='w-1/2 mx-10 flex-col flex items-center -mt-14'>
            <h1 className="text-2xl font-semibold text-PrimaryBlue">
              Probability of fish species
            </h1>
            <p className="font-medium mb-5">
              Choose the required point
            </p>
          <LocMap position={position} setPosition={setPostition} />
        </div>
      </div>
    </div>
  );
};

export default Location_Prob;