import React from 'react';
import { LineChart, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function temp(props) {
  const formatXAxis = (tick) => {
    const hour = new Date(tick * 1000).getHours();
    const amPm = hour >= 12 ? 'pm' : 'am';
    const hour12 = hour % 12 || 12;
    return `${hour12}${amPm}`;
  };

  return (
    <LineChart className='Chart.js' height={280} width={950} data={props.data.hourly}>
      <Line type="monotone" dataKey="temp" stroke="blue" strokeWidth={3} />
      <CartesianGrid stroke="black" />
      <XAxis dataKey="dt" tickFormatter={formatXAxis} tick={{ fill: 'black' }} />
      <YAxis dataKey="temp" label={{ value: 'Temperature', angle: -90, fill: 'black', position: 'insideLeft' }} tick={{ fill: 'black' }} />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}
