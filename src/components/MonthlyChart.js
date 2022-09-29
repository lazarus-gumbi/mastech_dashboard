import React from 'react'
import { Monthly } from '../components/Monthly'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Monthly SMS Data',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = Monthly.map((val, key) => {
    return val.month
  })
  
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Successful',
        data: Monthly.map((val, key) => {return val.sms.successful}),
        backgroundColor: 'rgba(103, 234, 27, 1)',
      },
      {
        label: 'Pending',
        data: Monthly.map((val, key) => {return val.sms.pending}),
        backgroundColor: 'rgba(234, 187, 27, 1)',
      },
      {
        label: 'Error',
        data: Monthly.map((val, key) => {return val.sms.error}),
        backgroundColor: 'rgba(255, 32, 2, 1)',
      },
    ],
  };

function MonthlyChart() {
  return (
    <Bar options={options} data={data} />
  )
}

export default MonthlyChart