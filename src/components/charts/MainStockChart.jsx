import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js'; // We already registered everything in the other file

const MainStockChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#161b22',
        titleColor: '#c9d1d9',
        bodyColor: '#8b949e',
        borderColor: '#30363d',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#8b949e' },
        grid: { color: '#30363d' },
      },
      y: {
        ticks: { color: '#8b949e' },
        grid: { color: '#30363d' },
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Price',
        data: [2200, 2250, 2400, 2350, 2500, 2600, 2750, 2700, 2800, 2850, 2900, 2845],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        tension: 0.1,
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default MainStockChart;
