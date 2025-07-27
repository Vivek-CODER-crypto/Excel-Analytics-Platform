import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

export default function Dashboard() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('/api/files/history', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res => setHistory(res.data));
  }, []);

  return (
    <div>
      <h2>Upload History</h2>
      {history.map((item, idx) => (
        <div key={idx}>
          <h4>{item.filename}</h4>
          <Bar data={{
            labels: item.data.map(d => Object.keys(d)[0]),
            datasets: [{ label: 'Sample', data: item.data.map(d => Object.values(d)[0]) }]
          }} />
        </div>
      ))}
    </div>
  );
}