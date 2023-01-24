import {rankingValues, rankRequirements, encodedCategories} from "./resources/requirements"; 

export const countMeanRanking = (opponents) => 1 /(opponents.length) * opponents
    .reduce( (previous, opponent) => previous + rankingValues[opponent.gender]
    .filter(category => category.name === opponent.category)[0].value , 0); 

export const countNorm = (Rs, Rmin, n) => Math.round(n/2 + (n+1)/800 * (Rmin - Rs));

export const countRu = (Rs, deltaR) => Rs + deltaR; 

export const countDeltaR = (opponents) => {
    const games = opponents.length-1;
    const points = opponents.reduce( (previous, opponent) => opponent.score === 1  || opponent.score === -1 ? previous + opponent.score : previous , 0 ); 
    // const lost = games - Math.round(points);

    // const multiplier = points - lost; 
    // console.log(`Wygrane ${points}, Przegrane ${lost}`);
    console.log(
        ( 400 / (games+1) ) * (points)
    );
    return Math.round( points !== 0 ? ( 400 / (games+1) ) * (points) :  0);
}

export const calculatePlayerChanges = (opponents) =>{
    const mean = countMeanRanking(opponents);
    const deltaR = countDeltaR(opponents);     
    
    const eglibleRanks = Object.keys(rankRequirements)
    .filter(
      key => encodedCategories[opponents[0].category] > encodedCategories[key]
    ) 
    console.log(eglibleRanks);
    console.log(`Średni ranking graczy w turnieju: ${mean}`);
    const Ru = countRu( mean, deltaR);
    const currentBlob = {
        "currentRuz": Ru,
        "normsAchieved":[]
    };
    console.log(`Ruz ${Ru}`);

    for(const rank of eglibleRanks){
      const chosenCategory  = rankRequirements[rank];
      
      // console.log(chosenCategory[opponents[0].gender]);
      // console.log(`delta R ${deltaR}`);
      if( chosenCategory[opponents[0].gender] <= Ru && chosenCategory["requiredGames"] <= opponents.length - 1  ){
        currentBlob["normsAchieved"].push(rank);
        // console.log(`Uzyskano normę ${rank}`);
      }
    }
    return currentBlob;
    // const chosenCategory  = rankRequirements[eglibleRanks[0]];
    // TODO: Add that equation only when someone from PZszach 
    // or any jury will explain what the heck this is for
    // const minimum = countNorm(mean, chosenCategory[opponents[0].gender], opponents.length);
  };

