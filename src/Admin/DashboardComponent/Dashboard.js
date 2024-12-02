import React, { useState } from 'react';
import SideBar from '../SideBar';
import NavBar from '../NavBar';
import DashboardCard from './DashboardCard';
import OrderControl from './OrderControl';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
        
        <div className="container" style={{overflow:'auto'}}>
          <h2>Dashboard</h2>
          <div className="row">
            <DashboardCard
              icon="fas fa-utensils"
              title="Dishes"
              count={47}
              link="#"
              color="blue"
            />
            <DashboardCard
              icon="fas fa-list"
              title="Categories"
              count={2}
              link="#"
              color="green"
            />
            <DashboardCard
              icon="fas fa-cubes"
              title="Orders"
              count={35}
              link="#"
              color="red"
            />
            <DashboardCard
              icon="fas fa-coins"
              title="Earnings"
              count={1320}
              link="#"
              color="grey"
            />
          </div>
          <div className="row" >
            <OrderControl />
          </div>
        </div>
  );
};

export default Dashboard;
