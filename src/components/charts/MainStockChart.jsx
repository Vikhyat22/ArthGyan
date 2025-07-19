import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  TimeScale, // Import TimeScale
  TimeSeriesScale // Import TimeSeriesScale
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

// Register all the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement,
  TimeScale, // Add TimeScale to the registration
  TimeSeriesScale // Add TimeSeriesScale to the registration
);

// Create new placeholder data in OHLC format (Open, High, Low, Close)
const ohlcData = [
  { x: new Date('2025-07-01').valueOf(), o: 100, h: 105, l: 98, c: 102 },
  { x: new Date('2025-07-02').valueOf(), o: 102, h: 108, l: 101, c: 107 },
  { x: new Date('2025-07-03').valueOf(), o: 107, h: 109, l: 103, c: 104 },
  { x: new Date('2025-07-04').valueOf(), o: 104, h: 106, l: 100, c: 101 },
  { x: new Date('2025-07-05').valueOf(), o: 101, h: 112, l: 101, c: 110 },
  { x: new Date('2025-07-06').valueOf(), o: 110, h: 115, l: 109, c: 114 },
  { x: new Date('2025-07-07').valueOf(), o: 114, h: 116, l: 111, c: 112 },
];

const MainStockChart = () => {
  const data = {
    datasets: [{
      label: 'Stock Price',
      data: ohlcData,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        ticks: { color: '#8b949e' },
        grid: { color: '#30363d' },
      },
      y: {
        ticks: { color: '#8b949e' },
        grid: { color: '#30363d' },
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#161b22',
        titleColor: '#c9d1d9',
        bodyColor: '#8b949e',
        borderColor: '#30363d',
        borderWidth: 1,
      }
    }
  };

  return <Chart type='candlestick' options={options} data={data} />;
};

export default MainStockChart;
