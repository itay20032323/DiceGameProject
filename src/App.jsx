import { useState } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Player from './components/Player/Player';

function App() {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [playersScores, setPlayersScores] = useState({
    1: {
      currentScore: 0,
      totalScore: 0
    },
    2: {
      currentScore: 0,
      totalScore: 0
    }
  });

  return (
    <div className="App">
      <Player 
        playerNumber={1} 
        playerTurn={playerTurn}
        totalScore={playersScores[1].totalScore} 
        currentScore={playersScores[1].currentScore}
      />
      <Main 
        playersScores={playersScores}
        setPlayersScores={setPlayersScores}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      />
      <Player 
        playerNumber={2} 
        playerTurn={playerTurn}
        totalScore={playersScores[2].totalScore} 
        currentScore={playersScores[2].currentScore}
      />
    </div>
  );
}

export default App;
