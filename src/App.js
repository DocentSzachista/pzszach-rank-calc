import logo from './logo.svg';
import PlayerCard from './components/PlayerCard';
import { useState } from 'react';
// import './App.css';

function App() {

  const [opponents, setOpponents] = useState([
    {
      "roundNumber": 1,
      "ranking": 1000,
    },
    {
      "roundNumber": 2,
      "ranking": 1000,
    },
  ]);
  const addNewOpponent = function() {
    const newOpponent = {
      "roundNumber": opponents.length+1,
      "ranking": 1000
    }
    setOpponents(
      [...opponents, newOpponent]
    );
    console.log(opponents);
    console.log(opponents.length);
  };

  return (
    <div className="App">
      {
        opponents.map(
          oponent => {
            return <PlayerCard round={oponent} />;
          }
        )
      }
      <br></br>
      <button onClick={addNewOpponent}>Add round</button>
    </div>
  );
}

export default App;
