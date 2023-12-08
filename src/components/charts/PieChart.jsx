import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Data from '../../data/Data'

ChartJS.register(ArcElement, Tooltip, Legend);

const { amount } = Data();

const PieChart = () => {
  const data = {
    // labels: ['Amount Received', 'Amount Pending'],
    labels: amount.map(item => item.label),
    datasets: [
      {
        data: amount.map(item => item.amount),
        backgroundColor: amount.map(item => item.color),
        labels: amount.map(item => item.label),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          borderRadius: 5
        },
      }
    }
  };
  return (
    <div style={{ width: '100%', maxWidth: '300px', margin: '1rem auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;