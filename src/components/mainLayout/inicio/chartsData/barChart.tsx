import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart: React.FC = () => {
    const data:ChartData<'bar'> = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'V e n t a s',
                data: [65, 59, 80, 81, 56, 55, 40, 58, 23, 14, 45, 32],
                backgroundColor: 'rgba(75,192,192,0.6)'
            },
            {
                label: 'G a n a n c i a s',
                data: [65, 59, 80, 81, 56, 55, 40, 58, 23, 14, 45, 32],
                backgroundColor: 'rgb(66, 135, 245)'
            },
        ],
    }
    const options:ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {

                padding: {
                    bottom: 10,
                    top: 10,
                },
                text: 'Ventas Mensuales',
                position: 'top',

            }
        },
    }
    return <Bar data={data} options={options} />
}

export default BarChart