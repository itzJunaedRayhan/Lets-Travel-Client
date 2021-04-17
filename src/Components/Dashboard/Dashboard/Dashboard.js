import React from 'react';
import './Dashboard.css'
import Bookings from '../Traveller/Bookings/Bookings';
import TravellerSidebar from '../TravellerSidebar/TravellerSidebar';

const Dashboard = () => {
    return (
        <section className="dashboard-section">
            <div className="row">
                <TravellerSidebar/>
                <Bookings/>
            </div>
        </section>
    );
};

export default Dashboard;