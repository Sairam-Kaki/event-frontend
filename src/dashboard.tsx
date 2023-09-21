import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Heading from './heading'
import Body from './body';
import '../src/assets/styles/dashboard.css'

export default function Dashboard() {
    // Example of using useState to manage a state variable
    const [data, setData] = useState<string | null>(null);
    const navigate = useNavigate();

    // Example of using useEffect to fetch data when the component mounts
    useEffect(() => {
        // Example Axios request to fetch data
        axios.get('/api/dashboard-data')
            .then((response) => {
                // Assuming the response contains some data
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className='fixed-top'>
                <Heading />
            </div>
            <div className='bodyy'>
                <Body />
            </div>
        </>
    );
}
