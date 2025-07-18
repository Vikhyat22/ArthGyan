import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

// This part is essential!
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

// We need to register the components we're using with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

// This component will receive the chart data and color as 'props'
const MiniTrendChart = ({ chartData, isPositive }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }, // No tooltips for mini charts
    },
    scales: {
      x: { display: false }, // Hide x-axis
      y: { display: false }, // Hide y-axis
    },
    elements: {
      point: { radius: 0 }, // Hide data points
    },
  };

  const data = {
    labels: chartData.map((_, index) => index), // Create simple labels [0, 1, 2, ...]
    datasets: [
      {
        data: chartData,
        borderColor: isPositive ? '#22c55e' : '#ef4444', // Green for positive, red for negative
        borderWidth: 2,
        tension: 0.4, // Makes the line smooth
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default MiniTrendChart;

