import { useState } from "react";
import Description from "../components/Descritpion";
import Modal from "../components/Modal";
const FideCalculator = () =>{
    const [playerRanking, setPlayerRanking] = useState('');
    const [opponentRanking, setOpponentRanking] = useState('');
    const [kValue, setKValue] = useState(40);
    const [score, setScore] = useState("");
    const [blob, setBlob] = useState({
        "currentRuz": undefined,
        "normsAchieved": undefined
    });
    
    const handleSubmit = (event) =>{

        const exponent = (opponentRanking - playerRanking ) / 400; 
        const denominator = 1 + Math.pow(10, exponent);
        const expected = 1 / denominator;
        const newRanking = playerRanking + kValue * (score - expected);

        setBlob({...blob, "currentRuz": newRanking});
        setShowModal(true);
        event.preventDefault();
    }; 
    const handleSelect = (event) =>{
        setKValue(event.target.value);
    };
    const handleScore = (event) =>{
        setScore(event.target.value);
    }
    const changeInputValue = (event, setVariable) =>{
        const re = /^[0-9\b]+$/;
        const value = parseInt(event.target.value);
        if (re.test(value) && value >= 0 ) {
            setVariable(value);
            return;
        }
        event.target.value="";
    };

    const handleModalClick = () =>{
        setShowModal(!showModal);
      };

    const handlePlayerOnChange = (event) =>{
        changeInputValue(event, setPlayerRanking);
    };
    
    const handleOpponentOnChange = (event) =>{
        changeInputValue(event, setOpponentRanking);
    };
    const [showModal, setShowModal] = useState(false);

    const descriptionBody = {
        "title": "Kalkulator rankingu fide",
        "listOfItems": [
            {
                "summary": "Co potrzebujesz?",
                "content": <p>Ranking swój i przeciwnika oraz jaką masz stałą K. Możesz ją sprawdzić na stronie FIDE </p>
            },
        ]
    }

    return ( 
    <>
        <Description data={descriptionBody} />
        <article>
            <header>
                 Policz zmianę rankingu
            </header>
            <form onSubmit={handleSubmit}>
                <div className="grid">
                    <label>Twój ranking
                        <input type="number" value={playerRanking} onInput={handlePlayerOnChange} required={true}/>
                    </label>
                    <label>Ranking przeciwnika
                        <input type="number" value={opponentRanking} onInput={handleOpponentOnChange} required={true}/>
                    </label>
                </div>
                <div className="grid">
                    <label>Współczynnik K
                        <select onChange={handleSelect}>
                            <option value={40}>40</option>
                            <option value={20}>20</option>
                            <option value={10}>10</option>
                        </select>
                    </label>
                    <label> Wynik spotkania
                        <select value={score} onChange={handleScore} required={true}>
                            <option value={""}></option>
                            <option value={0}> Przegrana (0) </option>
                            <option value={1}> Wygrana (1) </option>
                            <option value={0.5}> Remis (0.5) </option>
                        </select>
                    </label>
                </div>
                <button type="submit" value="Submit">
                    Policz zmianę rankingu
                </button>
            </form>
        </article>
        <Modal  rankBlob={blob} show={showModal} onClose={handleModalClick} />
    </>
    );
};
export default FideCalculator ;