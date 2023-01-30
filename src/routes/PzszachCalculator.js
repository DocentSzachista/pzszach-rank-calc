import "../styles/App.css";
import PlayerCard from '../components/PlayerCard';
import Modal from "../components/Modal";
import { useState } from 'react';
import {calculatePlayerChanges } from "../utils";
import Description from "../components/Descritpion";
function PzszachCalculator() {

  const [opponents, setOpponents] = useState([{
    "category": "BK",
    "gender": "M",
    "isPlayer": true 
  }]);
  const [rankBlob, setRankBlob] = useState({
    "currentRuz": undefined,
    "normsAchieved":[]
  });
  
  const [showModal, setShowModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleModalClick = () =>{
    setShowModal(!showModal);
  };

  const addNewOpponent = function() {
    const newOpponent = {
      "category": "BK",
      "score": 0,
      "gender": "M"
    };
    setOpponents(
      [...opponents, newOpponent]
    );
    setRankBlob(calculatePlayerChanges(opponents));
    handleStatisticsButton();
  };
  
  const handleStatisticsButton = () =>{
    if (opponents.length <5 && !disabledButton)
      setDisabledButton(true);
    else if (disabledButton && opponents.length === 5) 
      setDisabledButton(false);
  };

  const updateOpponents = () =>{
    setOpponents(
      opponents
    );
    // here handle all the calculations 
    setRankBlob(calculatePlayerChanges(opponents));
  };

  const handleOpponentRemoval = (index) =>{
    setOpponents(opponents.filter( (_, id) => id !== index));
    setRankBlob(calculatePlayerChanges(opponents));
    handleStatisticsButton();    
  };

  return (
    <>
      <Description />

      {
        opponents.map(
          (oponent, index) => {
            return <PlayerCard key={index} round={oponent} 
                    updateOpponents={updateOpponents} 
                    removeOpponent={handleOpponentRemoval} 
                    index={index}/> 
          }
        )
      }
      <div className="grid">
        <button className="primary" data-tooltip="Dodaj nowego przeciwnika" onClick={addNewOpponent}>Dodaj rundę</button>
        <button className="secondary" data-tooltip="Tooltip" onClick={handleModalClick} on disabled={disabledButton}>Pokaż statystyki</button>
      </div>
      <Modal rankBlob={rankBlob} show={showModal} onClose={handleModalClick} />
    </>
  );
}

export default PzszachCalculator;
