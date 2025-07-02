import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/card'; 
import './ChartStyles.css';

export default function LineChart({ data }) {
  const chartData = data.map(item => ({
    Year: item.Year,
    Population: item.Population
  }));

  return (
    <Card title="Population Trend" className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={ "var(--color-grey-light)" } />
          <XAxis dataKey="Year" stroke={ "var(--text-color-secondary)" } />
          <YAxis stroke={ "var(--text-color-secondary)" } />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Population"
            stroke="var(--color-pink-dark)"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </Card>
  );
}
