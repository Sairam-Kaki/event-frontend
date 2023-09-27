import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Heading from './heading'
import Body from './body';
import '../assets/styles/dashboard.css'
import EventForm from '../components/eventForm';

export default function AdminDashboard() {
    // Example of using useState to manage a state variable
    const [userData, setUserData] = useState([]); //<Array<object> | null>
    const [eventData, setEventData] = useState([]);

    const navigate = useNavigate();

    const token: string | null = sessionStorage.getItem("authToken");


    useEffect(() => {
        async function getUserData() {
            try {
                const response = await axios.get("http://localhost:8080/admindashboard", {
                    headers: { Authorization: token },
                });
                const responseData = response.data;
                if (responseData.message === "TokenExpiredError") {
                    navigate("/");
                } else {
                    setUserData(responseData.userData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        async function getEventData() {
            try {
                const response = await axios.get("http://localhost:8080/event");
                const responseData = response.data;
                const edata = responseData.eventData;
                setEventData(edata);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        }

        if (token) {
            getUserData();
            getEventData();
        } else {
            sessionStorage.clear();
            navigate("/");
        }
    }, [navigate, token]);

    console.log("eventdata: ", eventData);

    return (
        <>
            <div className='stickey-top'>
                <Heading data={userData} />
            </div>
            {window.location.pathname === '/admindashboard' &&
                <div className="create-event">
                    <EventForm />
                </div>
            }
            <div className='bodyy'>
                <Body data={eventData} />
            </div>
        </>
    );
}
