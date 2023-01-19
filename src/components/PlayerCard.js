import { useState} from "react";

const PlayerCard = (props) => {
    const [gender, setGender] = useState("M");
    const rankingValues ={
    "K":[
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
        setGender(event.target.value);
        console.log(gender);
    };
    const round = props.round;
    return (
        <div>
            <h2>
                Runda {round.roundNumber}
            </h2>
            <div>
                <div>
                <h3>Płeć</h3>
                <input type="radio" value="M" name="gender" checked={round.gender === "M"} onChange={updateGender}/>
                <label for="gender"> męższczyzna </label>
                <input type="radio" value="K" name="gender" checked={round.gender === "K"} onChange={updateGender}/>
                <label for="gender"> kobieta </label>
                </div>
                <div>
                    <h3>Ranking zawodnika</h3>
                    <select name="ranking">
                    {    rankingValues[gender].map(
                            rank => {
                                <option value={rank.value}> {rank.name}({rank.value}) </option>
                            }
                        )
                    }
                    </select>
                </div>
            </div>
        </div>
    );
};
export default PlayerCard;
