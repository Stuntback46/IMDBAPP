import React from 'react';
import Card from './Card';
import './cardlist.css';


const CardList = (moviesList) => {
	
let card = [];
for (var i = 0; (i < 10); i++) {

	if(moviesList.moviesList[i]!==undefined)
	{card[i]=<Card 
		key={i}
		Title={(moviesList.moviesList[i].Title)?(moviesList.moviesList[i].Title):'Not avaiable'}
		Poster={moviesList.moviesList[i].Poster?(moviesList.moviesList[i].Poster):'Not avaiable'} 
		Plot={moviesList.moviesList[i].Plot?(moviesList.moviesList[i].Plot):'Not avaiable'} 
		Ratings={(moviesList.moviesList[i].Ratings)!==undefined?(moviesList.moviesList[i].Ratings[0].Value):'Not avaiable'}
		Actors={moviesList.moviesList[i].Actors?(moviesList.moviesList[i].Actors):'Not avaiable'}
		Website={moviesList.moviesList[i].Website?(moviesList.moviesList[i].Website):'Not avaiable'} 
		 />;}
	
	
	
}
return(
<div className="cardlist">

		{card.map(card=>card)}

</div>

		);

}
export default CardList