import React from 'react';
import './card.css';

const Card = ({Title, Poster,Plot,Ratings,Actors,Website}) => {
		

return(
<a href={Website?Website:Poster} target="_blank" rel="noopener noreferrer">
<div className='card grow'>	

<h2>{Title}</h2>
<img alt='Skyfall movie'src={Poster} />
<h3>Actors:</h3>
<p>{Actors}</p>
<h3>Plot:</h3>
<p>{Plot}</p>
<h3>IMDB Rating:</h3>
<p>{Ratings}</p>

</div>
</a>



	);

}
export default Card/*

	DataTransfer

	clearData ( format?: DOMString )

	Return Type:
	void

	Description:
	



	URL doc:
	http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#dom-datatransfer-cleardata

*/