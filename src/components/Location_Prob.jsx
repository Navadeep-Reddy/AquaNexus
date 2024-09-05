import {React, useState} from 'react';
import Title from '../components/Title';
import MyBarChart from './ChartComponents/MyBarChart';
import LocMap from '/home/navadeep/Documents/AquaNexus/src/components/LocMap.jsx'

const temp_data = [
  { name: 'Fish 1', Probability: 3000 },
  { name: 'Fish 2', Probability: 4000 },
  { name: 'Fish 3', Probability: 2000 },
  { name: 'Fish 4', Probability: 2780 },
  { name: 'Fish 5', Probability: 1890 },
  { name: 'Fish 6', Probability: 2390 },
  { name: 'Fish 7', Probability: 3490 },
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