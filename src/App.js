import React from 'react';
import Dashboard from './Dashboard';
import { GameProvider } from './GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomStyles.css';


function App() {
  return (
    <div className="App">
      <GameProvider>
        <Dashboard />
      </GameProvider>
    </div>
  );}

export default App;
