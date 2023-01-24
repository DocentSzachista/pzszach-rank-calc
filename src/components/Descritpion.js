const Description = () =>{

    return (
        <div className="desc">
            <h2>
                Kalkulator norm rankingowych PZszach
            </h2>
            <div>
                <details>
                    <summary>
                        Co potrzebujesz
                    </summary>
                    <p>
                        Jedynie kategorie szachowe. Twoja i przeciwników. 
                        Kalkulator nie uwzględnia tempa gry w jakim brałeś udział.
                    </p>
                </details>
                <details>
                    <summary>
                        Jak to się liczy?
                    </summary>
                    <p>
                        Strona PZszach zawiera <a href="https://pzszach.pl/2020/01/02/regulaminy-2020/" target="_blank" rel="noopener noreferrer"> 
                        regulamin </a> jak ranking powinien być liczony. Z racji, że nie do końca zostało określone wykorzystanie wzoru z pkt 7.
                        został on pominięty. Po wstępnych testach jakie przeprowadziłem, wynika że przeprowadzone obliczenia zgadzają się
                        z innym <a href="http://szachygrodzisk.pl/kalkulator/" target="_blank" rel="noopener noreferrer">kalkulatorem</a>.
                    </p>
                </details>                
                <details>
                    <summary>
                        Dodatkowe informacje
                    </summary>
                    <p>
                        Stronka jest jeszcze w stanie work in progress, dlatego mogą się zdarzyć jeszcze pewne niedociągnięcia.
                    </p>
                </details>
            </div>
        </div>
    );
    
}
export default Description;