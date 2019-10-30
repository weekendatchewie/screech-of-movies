import React from 'react';
import MovieCard from './components/MovieCard'
import './App.css';
import MovieCountry from './components/MovieCountry'
import axios from 'axios'

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
        <MovieCard movie={this.state.movie}/>
        <button type="button" onClick={this.getMovie}>Get Movie</button> 
      </div>
    );
  }
}

export default App;
