import { useState} from "react";

const PlayerCard = (props) => {
    const [gender, setGender] = useState("M");
    const [option, setOption] = useState("ND");
    const rankingValues ={
    "K":[
        {
            "name": "BK",
            "value": 1000
        },
        {
            "name": "V",
            "value": 1000
        },
        {
            "name": "IV",
            "value": 1200
        },
        {
            "name": "III",
            "value": 1450
        },
        {
            "name": "II",
            "value": 1600
        },
        {
            "name": "I",
            "value": 1800
        },
        {
            "name": "k",
            "value": 2000
        }
    ],
    "M":[
        {
            "name": "BK",
            "value": 1000
        },
        {
            "name": "V",
            "value": 1200
        },
        {
            "name": "IV",
            "value": 1400
        },
        {
            "name": "III",
            "value": 1600
        },
        {
            "name": "II",
            "value": 1800
        },
        {
            "name": "I",
            "value": 2000
        },
        {
            "name": "k",
            "value": 2200
        }
    ]
    };
    const updateGender = event =>{
        const newGender = event.target.value;
        setGender(newGender);
        round.ranking = rankingValues[newGender].filter(rank => rank.name === option )[0].value;
        updateOpponents();
    };
    const round = props.round;
    const updateOpponents = props.updateOpponents;
    
    const handleRanking = event =>{
        const category = event.target.value;
        const filtered = rankingValues[gender].filter(rank => rank.name === category ); 
        round.ranking = filtered[0].value;
        setOption(category);
        updateOpponents();
    };
    const handleScore = event => {
        round.score = parseInt(event.target.value);
        updateOpponents();
    };
    
    return (
        <div className="card">
            <h3>
                
                {round.roundNumber === 0 ? "Gracz" : `Runda ${round.roundNumber}`  }
            </h3>
            <div className="grid">
                <label>Płeć
                    <select value={gender} onChange={updateGender}>
                        <option value={"M"}>mężczyzna</option>
                        <option value={"K"}>kobieta</option>
                    </select>
                </label>
                <label>Ranking zawodnika
                    <select name="ranking" onChange={handleRanking}>
                    {    
                        rankingValues[gender].map(
                            rank => {
                                return <option value={rank.name}> {rank.name}({rank.value}) </option>;
                            }
                        )
                    }
                    </select>
                </label>
                { round.roundNumber === 0 ? "" :
                <label>
                    Wynik
                    <select value={null} onChange={handleScore}>
                        <option value={0}> Przegrana (0) </option>
                        <option value={1}> Wygrana (1) </option>
                        <option value={0.5}> Remis (0.5) </option>
                    </select>
                </label>
                }
            </div>
        </div>
    );
};
export default PlayerCard;
