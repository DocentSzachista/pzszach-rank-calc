import { rankingValues } from "./resources/requirements";
export const countMeanRanking = (opponents) => 1 /(opponents.length) * opponents
    .reduce( (previous, opponent) => previous + rankingValues[opponent.gender]
    .filter(category => category.name === opponent.category)[0].value , 0); 

export const countNorm = (Rs, Rmin, n) => Math.round(n/2 + (n+1)/800 * (Rmin - Rs));

export const countRu = (Rs, deltaR) => Rs + deltaR; 

export const countDeltaR = (opponents) => {
    const games = opponents.length-1;
    const wins = opponents.reduce( (previous, opponent) => opponent.score ? previous + opponent.score : previous , 0 ); 
    const multiplier = 2 * wins - games; 
    console.log(`Wygrane ${wins}, Przegrane ${games - wins}`);
    return Math.round( multiplier !== 0 ? ( 400 / (games+1) ) * (multiplier) : 400 / (games +1) );
}
