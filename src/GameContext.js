import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
    const [selectedGame, setSelectedGame] = useState(null);
  
    const handleGameClick = (gameName) => {
      setSelectedGame(selectedGame === gameName ? null : gameName);
    };
  
    const value = {
      selectedGame,
      handleGameClick,
    };
  
    return (
      <GameContext.Provider value={value}>
        {children}
      </GameContext.Provider>
    );
  }