import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Daily } from '../components/Daily'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Daily SMS Data',
    },
  },
};


const labels = Daily.map((val,key)=>{
  return val.date
})


export const data = {
  labels,
  datasets: [
    {
      label: 'Successful',
      data: Daily.map((val) => val.sms.successful),
      borderColor: 'rgba(103, 234, 27, 1)',
      backgroundColor: 'rgba(103, 234, 27, 0.5)',
    },
    {
      label: 'Pending',
      data: Daily.map((val) => val.sms.pending),
      borderColor: 'rgba(234, 187, 27, 1)',
      backgroundColor: 'rgba(234, 187, 27, 0.5)',
    },
    {
      label: 'Error',
      data: Daily.map((val) => val.sms.error),
      borderColor: 'rgba(255, 32, 2, 1)',
      backgroundColor: 'rgba(255, 32, 2, 0.5)',
    },
  ],
};

function DailyChart() {
  return (<Line options={options} data={data} />);
}

export default DailyChart
