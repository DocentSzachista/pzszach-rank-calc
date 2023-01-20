import "./styles/App.css";
import PlayerCard from './components/PlayerCard';
import { useState } from 'react';
// import './App.css';

function App() {

  const [opponents, setOpponents] = useState([{
    "roundNumber": 0,
    "ranking": 1000,
    // "score": undefined,
  }]);
  const addNewOpponent = function() {
    const newOpponent = {
      "roundNumber": opponents.length,
      "ranking": 1000,
      "score": undefined
    }
    setOpponents(
      [...opponents, newOpponent]
    );
  };
  const updateOpponents = () =>{
    setOpponents(
      opponents
    );
    console.log( countMeanRanking());
    // console.log(opponents);
  }
  const countMeanRanking = () => opponents.length /(opponents.length+1) * opponents.reduce( 
      (previous, opponent) => previous + opponent.ranking , 0); 
  return (
    <div>
      <div className="app">
      {
        opponents.map(
          oponent => {
            return <PlayerCard round={oponent} updateOpponents={updateOpponents}/> // updateScore={updateScore} updateRanking={updateRanking} />;
          }
        )
      }
      <button onClick={addNewOpponent}>Add round</button>

      </div>
    </div>
  );
}

export default App;
