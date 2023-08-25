import React from 'react';
import './CustomStyles.css';
import { useGameContext } from './GameContext';

function GameInfo() {
    const { selectedGame, handleGameClick } = useGameContext();
  // Placeholder game data
  const gameData = {
    leader: {
        name: 'Leader Name',
        contact: 'Leader Contact',
      },
      teamMembers: [
        { name: 'Team Member 1', role: 'Role 1' },
        { name: 'Team Member 2', role: 'Role 2' },
        { name: 'Team Member 3', role: 'Role 3' },
      ],
      games: ['Football', 'Basketball', 'Tennis'],
  };
  const selectedGameData = gameData.games.find(game => game === selectedGame);

  return (
    <div className="game-info mt-4">
      <h2>Game Information</h2>
      <div className="leader-info">
      <h3>Leader</h3>
        <ul className="list-unstyled">
          <li><strong>Name:</strong> {gameData.leader.name}</li>
        </ul>
        {/* ... (leader's info) */}
      </div>
      <div className="team-info">
        <h3>Team Information: {selectedGameData}</h3> {/* Remove this line */}
        {selectedGameData && (
          <ul className="list-unstyled">
            {gameData.teamMembers.map((member, index) => (
              <li key={index}>
                <strong>{member.name}</strong> - {member.role}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="games-list">
        <h3>Games</h3>
        <ul className="list-unstyled">
          {gameData.games.map((game, index) => (
            <li
              key={index}
              className={selectedGame === game ? 'selected' : ''}
              onClick={() => handleGameClick(game)}
            > {game}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GameInfo;