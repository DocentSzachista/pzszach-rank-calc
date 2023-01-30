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

  const descriptionBody = {
    "title": "Kalkulator norm rankingowych PZszach",
    "listOfItems": [
        {
            "summary": "Co Potrzebujesz",
            "content": <p>Jedynie kategorie szachowe. Twoja i przeciwników."
            Kalkulator nie uwzględnia tempa gry w jakim brałeś udział. </p>, 
        },
        {
            "summary":"Jak to się liczy?",
            "content":(<p>
                Strona PZszach zawiera  <a href="https://pzszach.pl/2020/01/02/regulaminy-2020/" target="_blank" rel="noopener noreferrer"> 
                regulamin </a> jak ranking powinien być liczony. Z racji, że nie do końca zostało określone wykorzystanie wzoru z pkt 7.
                został on pominięty. Po wstępnych testach jakie przeprowadziłem, wynika że przeprowadzone obliczenia zgadzają się
                z innym <a href="http://szachygrodzisk.pl/kalkulator/" target="_blank" rel="noopener noreferrer">kalkulatorem</a>.
            </p>)
        },
        {
            "summary": "Ile gier na ktorą kategorię?",
            "content": <>
            <ul>
                <li>
                    V, IV - 5 gier
                </li>
                <li>
                    III, II - 7 gier 
                </li>
                <li>
                    II+, I, I+, I++ k, M - 9 gier
                </li>
            </ul>
            <p>
                Aby uzyskać kategorię I, K trzeba najpierw uzyskać kategorie częściowe.
                Te poziomy nie zezwalają na wbicie jednocześnie np II+ i I w jednym turnieju.
            </p>
            </>
        },
        {
            "summary":"                        Dodatkowe informacje",
            "content": <p>
            Stronka jest jeszcze w stanie work in progress, dlatego mogą się zdarzyć jeszcze pewne niedociągnięcia.
            Jeżeli chcesz zgłosić usterkę, bądź propozycję do usprawnienia, wystaw Issue na  <a href="https://github.com/DocentSzachista/pzszach-rank-calc/issues" target="_blank" rel="noopener noreferrer">Githubie </a>.
            </p>
        }
    ]

};

  return (
    <>
      <Description data={descriptionBody} />

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
