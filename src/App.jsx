import React, { useState, useEffect } from 'react';
import { fetchPopulationData } from './utils/api';

import Navbar from './components/navbar';
import DateRangeFilter from './contents/DateRangeFilter';
import OrganizationInfo from './contents/OrganizationInfo';
import LineChart from './contents/LineChart';
import PieChart from './contents/PieChart';

import './App.css';

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [orgInfo, setOrgInfo] = useState({ name: '', description: '' });
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, orgInfo: fetchedOrgInfo } = await fetchPopulationData();
        setApiData(data);
        setOrgInfo(fetchedOrgInfo);
      } catch (err) {
        setError(err.message || "An unknown error occurred while fetching data.");
        console.error("Error in App component:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      const filtered = apiData.filter(item => {
        const year = parseInt(item.Year);
        const start = startDate === null ? -Infinity : startDate;
        const end = endDate === null ? Infinity : endDate;
        return year >= start && year <= end;
      });
      const sortedFiltered = filtered.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
      setFilteredData(sortedFiltered);
    }
  }, [apiData, startDate, endDate]);

  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="app-layout">
      <Navbar />

      <div className="container">
        <OrganizationInfo name={orgInfo.name} description={orgInfo.description} />

        <DateRangeFilter onDateRangeChange={handleDateRangeChange} />

        <div className="charts-container">
          {loading && <p>Loading data...</p>}
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && filteredData.length === 0 && (
            <p>No data available for the selected range. Try adjusting the filter.</p>
          )}
          {!loading && !error && filteredData.length > 0 && (
            <>
              <LineChart data={filteredData} />
              <PieChart data={filteredData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}