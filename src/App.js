import React from 'react';
import MovieCard from './components/MovieCard'
import './App.css';
import axios from 'axios'
import MovieCountry from './components/MovieCountry'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
    
    this.getMovie = this.getMovie.bind(this); 
    
  }

  getMovie() {
    function getRandom(max) {
      return Math.floor(Math.random() * 82);
    }
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      
      .then(response => response.data) 
      
      .then(data => {
        console.log(data)
        this.setState({
          movie: data.movies[getRandom()],
        });
    });
  }


  


  render() {
    return (
      <div className="App">

     

      <div>
        <MovieCard movie={this.state.movie}/>
        <button type="button" onClick={this.getMovie}>Get Movie</button> 
      </div>
      <div>
        <MovieCountry movie={this.state.movie}/>
        <button type="button" onClick={this.getMovieCountry}>Get Movie</button> 
      </div> 
      
      
      </div>
    );
  }
}

export default App;
