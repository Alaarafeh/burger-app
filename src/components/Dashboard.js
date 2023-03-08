import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie'


const Dashboard = () => {

    useEffect(() => {
        console.log(Date.now);
      });

    const [cookies] = useCookies(['access_token'])

    useEffect(() => {
        if (!cookies.access_token) {
          window.location.href = '/login';
          return;
        }
    })

    return (
        <h2>Dashboard</h2>
    );
};

export default Dashboard;