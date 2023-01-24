import { rankingValues } from "../resources/requirements";

const PlayerCard = (props) => {
    const round = props.round;
    const updateOpponents = props.updateOpponents;

    const updateGender = event =>{
        const newGender = event.target.value;
        round.gender = newGender
        updateOpponents();
    };

    const handleRanking = event =>{
        const category = event.target.value;
        round.category = category;
        updateOpponents();
    };
    const handleScore = event => {
        round.score = parseFloat(event.target.value);
        updateOpponents();
    };
    
    return (
        <article>
            <hgroup>
                <h1>
                    {round.roundNumber === 0 ? "Gracz" : `Runda ${round.roundNumber}`  }
                </h1>
                <h2>
                </h2>
            </hgroup>
            <div className="grid">
                <label>Płeć
                    <select value={round.gender} onChange={updateGender}>
                        <option value={"M"}>mężczyzna</option>
                        <option value={"K"}>kobieta</option>
                    </select>
                </label>
                <label>Ranking zawodnika
                    <select name="ranking" onChange={handleRanking}>
                    {    
                        rankingValues[round.gender].map(
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
                        <option value={-1}> Przegrana (0) </option>
                        <option value={1}> Wygrana (1) </option>
                        <option value={0}> Remis (0.5) </option>
                    </select>
                </label>
                }
            </div>
        </article>
    );
};
export default PlayerCard;
