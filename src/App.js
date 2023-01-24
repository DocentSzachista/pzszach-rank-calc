import "./styles/App.css";
import PlayerCard from './components/PlayerCard';
import Modal from "./components/Modal";
import { useState } from 'react';
import {calculatePlayerChanges } from "./utils";
import Description from "./components/Descritpion";
function App() {

  const [opponents, setOpponents] = useState([{
    "roundNumber": 0,
    "category": "BK",
    "gender": "M"
  }]);
  const [rankBlob, setRankBlob] = useState({
    "currentRuz": undefined,
    "normsAchieved":[]
  });
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () =>{
    setShowModal(!showModal);
  };

  const addNewOpponent = function() {
    const newOpponent = {
      "roundNumber": opponents.length,
      "category": "BK",
      "score": undefined,
      "gender": "M"
    }
    setOpponents(
      [...opponents, newOpponent]
    );
  };


  const updateOpponents = () =>{
    setOpponents(
      opponents
    );
    // here handle all the calculations 
    setRankBlob(calculatePlayerChanges(opponents));
  }


  return (
    <main className="container">
      <Description />

      {
        opponents.map(
          oponent => {
            return <PlayerCard round={oponent} updateOpponents={updateOpponents}/> 
          }
        )
      }
      <div className="grid">
        <button className="primary" onClick={addNewOpponent}>Add round</button>
        <button className="secondary" onClick={handleModalClick}>Pokaż statystyki</button>
      </div>
      <Modal rankBlob={rankBlob} show={showModal} onClose={handleModalClick} />
    </main>
  );
}

export default App;
