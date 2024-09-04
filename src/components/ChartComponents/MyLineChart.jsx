import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = ({ data, selectedItems, setSelectedItems }) => {
  // Find the overall min and max values in the data
  const allValues = data.flatMap(item => Object.values(item).filter(val => typeof val === 'number'));
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);

  return (
    <div className="h-[300px] w-full"> 
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="RecordDate" />
          <YAxis domain={[minValue, maxValue]} /> 
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey={Object.keys(data[0]).find(key => key !== 'RecordDate')}
            stroke="transparent"
            strokeWidth={0}
            />
            console.log(dataKey);
          {selectedItems.map((key, index) => (
            <Line
              type="monotone"
              dataKey={key}
              stroke={`hsl(${index * 45}, 70%, 50%)`} 
              strokeWidth={3}
              key={key}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;