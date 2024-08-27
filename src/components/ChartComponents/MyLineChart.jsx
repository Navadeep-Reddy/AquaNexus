import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', Fish: 4000, Cow: 2400, amt: 2400 },
  { name: 'Page B', Fish: 3000, Cow: 1398, amt: 2210 },
  { name: 'Page C', Fish: 2000, Cow: 9800, amt: 2290 },
  { name: 'Page D', Fish: 2780, Cow: 3908, amt: 2000 },
  { name: 'Page E', Fish: 1890, Cow: 4800, amt: 2181 },
  { name: 'Page F', Fish: 2390, Cow: 3800, amt: 2500 },
  { name: 'Page G', Fish: 3490, Cow: 4300, amt: 2100 },
];

const MyLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} className=''>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Fish" stroke="#FF6F61" strokeWidth={3}/>
      <Line type="monotone" dataKey="Cow" stroke="#82ca9d" strokeWidth={3}/>
    </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
