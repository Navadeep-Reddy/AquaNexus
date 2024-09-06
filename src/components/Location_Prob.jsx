import { React, useState, useEffect } from 'react';
import Title from '../components/Title';
import MyBarChart from './ChartComponents/MyBarChart';
import LocMap from './LocMap.jsx';
import axios from 'axios';


const temp_data = []


const Location_Prob = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors
  const [position, setPosition] = useState(null);

  const fetchData = async (requestData) => {
    try {
      // Send a POST request with the JSON object
      const response = await axios.post("http://localhost:5000/predict", requestData, {
        headers: {
          'Content-Type': 'application/json' // Specify JSON format
        }
      });
      
      console.log(response.data)
      const transformedData = Object.entries(response.data).map(([key, value]) => ({
        name: key,
        Probability: value // Adjust this factor if needed
      }));
      setData(transformedData);
       // Update state with received data
    } catch (error) {
      setError(error.message); // Handle any errors
      console.error("Error fetching the data:", error);
    }
  };
  

  return (
    <div className='mb-28' name = "ML">
      <Title Title={"Forecast"} Subtitle={"Predicting fish occurrence probabilities"} />
      <div className='my-28 w-[90%] mx-auto flex'>
        <div className='w-1/2'>
          {/* Pass the fetched data to MyBarChart */}
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <MyBarChart data={data.length ? data : temp_data} />
          )}
        </div>
        <div className='w-1/2 mx-10 flex-col flex items-center -mt-14'>
          <h1 className="text-2xl font-semibold text-PrimaryBlue">
            Probability of fish species
          </h1>
          <p className="font-medium mb-5">
            Choose the required point
          </p>
          <LocMap position={position} setPosition={setPosition} getData={fetchData} />
        </div>
      </div>
    </div>
  );
};

export default Location_Prob;
