import React from 'react';
import UserInfo from './UserInfo';
import GameInfo from './GameInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameProvider } from './GameContext';
import './Dashboard.css';
import './CustomStyles.css';

function Dashboard() {
    return (
        <GameProvider>
      <div className="container-fluid dashboard">
      <div className="top-banner">
          <h1 className="first_H1" style={{fontSize:"1.2em"}}>Spardha'23</h1>
        </div>
        <h1 className="mt-4">Admin Dashboard</h1>
        <div className="row">
          <div className="col-lg-6">
            <UserInfo />
          </div>
          <div className="col-lg-6">
            <GameInfo />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}

export default Dashboard;
