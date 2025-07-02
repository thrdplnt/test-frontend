import React from 'react';
import { PieChart as RechartsPieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import Card from '../components/card'; 
import './ChartStyles.css';

export default function PieChart({ data }) {
  const displayData = data
    .sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
    .slice(0, Math.min(data.length, 7))
    .map(item => ({
      name: item.Year,
      value: item.Population
    }));

  const COLORS = [
    'var(--color-pink-dark)',
    'var(--color-pink-purple)',
    '#E0BBE4',                     
    '#F0E68C',                     
    '#8FD1C6',                     
    '#99BADD',                     
    '#C3C6A2'
  ];

  return (
    <Card title="Population Distribution (Pie Chart)" className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={displayData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {displayData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </Card>
  );
}