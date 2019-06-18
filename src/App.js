import React from 'react';
import CardList from './CardList'

class App extends React.Component {
    constructor() {
        super()
        this.state = {moviesList:[]}
    }

    componentDidMount(){
        
        fetch('http://77.71.181.205:16001/mymovieslistjson/')
        .then(response=>response.json())
        .then(movies => this.setState({moviesList: movies}))
    
        }
		
   
    render() {
    	if (this.state.moviesList.length<10)
    		{

    			return (
    			<p>Loading</p>

    			);}
    	else
    	{	

    		return ( 

        	<div >
            <h1 className = 'f1' > My 10 favorite Movies </h1> 
            <div style={{overflowY:'scroll',border: 'none', height: '700px'}}>
            <CardList moviesList={this.state.moviesList}/>
            </div>
            </div>
        );}
}
        
}
export default App;