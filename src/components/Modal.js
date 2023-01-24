const Modal = (props) =>{

    const data = props.rankBlob;
    const show = props.show; 
    const handleOnClose = props.onClose; 

    const dialogBody = data.normsAchieved.length ? (<ul>
        { data["normsAchieved"].map(
            rank => <li> {rank} </li>
        )}
    </ul>) : <p> Nie uzyskano normy. </p>;

    return (
        <dialog open={show}>
            <article>
                <hgroup>
                    <h2>Statystyki</h2>
                    <h3>Ranking uzyskany: {data["currentRuz"] ? data["currentRuz"] : "Brak danych" }</h3>
                </hgroup>
                <p>
                    Możliwe do wyrobienia normy na kategorie: 
                </p>
                {dialogBody}
                <footer>
                    <button onClick={handleOnClose}>Zamknij</button>
                </footer>
            </article>
        </dialog>
    );

};
export default Modal;