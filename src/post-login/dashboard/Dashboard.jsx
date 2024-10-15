import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../appconfig';
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {

    const [analyticsData, setAnalyticsData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const agents = await axios.get(`${API_URL}/users`);
        const agentID = localStorage.getItem('USER_ID');
        const customerList = await axios.get(`${API_URL}/customer/${agentID}`);
        const policies = await axios.get(`${API_URL}/policy/${agentID}`);

        setAnalyticsData([agents.data.length, customerList.data.length, policies.data.length]);
    }

    const data = {
        labels: ['Agents', 'Customers', 'Polcies'],
        datasets: [
            {
                label: '#',
                data: analyticsData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Red
                    'rgba(54, 162, 235, 0.6)', // Blue
                    'rgba(255, 206, 86, 0.6)'  // Yellow
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Red
                    'rgba(54, 162, 235, 1)', // Blue
                    'rgba(255, 206, 86, 1)'  // Yellow
                ],
                borderWidth: 1,
            },
        ],
    };

    // Configuration options for the pie chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <div className='d-flex'>
        <h1>Analytics</h1>
        <div style={{ width: '50%', height: '50%' }}>
            <div className='d-flex justify-content-center'>
                <Pie data={data} options={options} />
            </div>
        </div>
    </div>;
}

export default Dashboard