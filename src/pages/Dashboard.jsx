import { useState } from 'react';
import Side from '../components/Side';
import MainContent from '../components/MainContent';
// import '../styles/Dashboard.css';
import '../styles/Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Side/>
            <MainContent/>
        </div>
        // <h1>This is the Dashboard</h1>
    )
}

export default Dashboard;