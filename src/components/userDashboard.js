import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserDashboard.css';

const UserDashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <ul>
                    <li><Link to="/attendance">User Attendance</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                </ul>
            </nav>
            <div className="dashboard-content">
                {/* Main content will be displayed here */}
                <h1>Welcome to the Gym Management Dashboard</h1>
            </div>
        </div>
    );
};

export default UserDashboard;
