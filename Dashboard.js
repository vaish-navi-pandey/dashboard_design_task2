import React, { useState } from 'react';
import UserInfo from './UserInfo';
import GameInfo from './GameInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameProvider } from './GameContext';
import './Dashboard.css';
import './CustomStyles.css';

function Dashboard() {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <GameProvider>
      <div className={`container-fluid dashboard ${isNavOpen ? 'nav-open' : ''}`}>
        <div className="top-banner">
          <span>Spardha 23</span>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </nav>
        <h1 className="mt-4">Admin Dashboard</h1>
        <div className="row">
          <div className="col-lg-6">
            <UserInfo />
          </div>
          <div className="col-lg-6">
            <GameInfo />
          </div>
        </div>
      </div></GameProvider>
  );
}

export default Dashboard;