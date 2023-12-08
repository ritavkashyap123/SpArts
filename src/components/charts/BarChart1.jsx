import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Revenue',
            align: "start",
        },
    },
};

const labels = ['January', 'February', 'March'];

const data = {
    labels,
    datasets: [
        {
            label: "FEE RECEIVED",
            data: [10, 20, 30],
            backgroundColor: '#495A62',
        },
    ],
};


function BarChart1() {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart1;