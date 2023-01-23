import "./styles/App.css";
import PlayerCard from './components/PlayerCard';
import { useState } from 'react';
import {countMeanRanking, countNorm, countDeltaR, countRu } from "./utils";
import Description from "./components/Descritpion";
import {rankRequirements, encodedCategories} from "./resources/requirements"; 
function App() {

  const [opponents, setOpponents] = useState([{
    "roundNumber": 0,
    "category": "BK",
    "gender": "M"
  }]);

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
    const mean = countMeanRanking(opponents);
    
    const eglibleRanks = Object.keys(rankRequirements)
    .filter(
      key => encodedCategories[opponents[0].category] > encodedCategories[key]
    ) 
    console.log(eglibleRanks);
    console.log(`Średni ranking graczy w turnieju: ${mean}`);

    const chosenCategory  = rankRequirements[eglibleRanks[0]];
    const minimum = countNorm(mean, chosenCategory[opponents[0].gender], opponents.length);
    const deltaR = countDeltaR(opponents); 
    const Ru = countRu(chosenCategory[opponents[0].gender], deltaR);
    console.log(`delta R ${deltaR}`);
    console.log(`Ruz ${Ru}`);
    // console.log(`Uzyskano normę ${minimum}`);
    if( chosenCategory[opponents[0].gender] <= Ru && chosenCategory["requiredGames"] === opponents.length - 1  ){
      console.log(`Uzyskano normę ${minimum}`);
    }
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
      <button className="secondary">Pokaż statystyki</button>
      </div>
    </main>
  );
}

export default App;
