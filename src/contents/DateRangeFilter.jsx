import React, { useState } from 'react';
import Button from '../components/button'; 
import './DateRangeFilter.css';

export default function DateRangeFilter({ onDateRangeChange }) {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleApply = () => {
    const parsedStart = parseInt(startYear);
    const parsedEnd = parseInt(endYear);

    onDateRangeChange(
      isNaN(parsedStart) ? null : parsedStart,
      isNaN(parsedEnd) ? null : parsedEnd
    );
  };

  return (
    <div className="date-range-filter">
      <label>
        Start Year:
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          placeholder="e.g., 2010"
        />
      </label>
      <label>
        End Year:
        <input
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          placeholder="e.g., 2020"
        />
      </label>
      <Button onClick={handleApply}>Apply Filter</Button>
      <Button onClick={() => {
        setStartYear('');
        setEndYear('');
        onDateRangeChange(null, null); 
      }}>Reset Filter</Button>
    </div>
  );
}
