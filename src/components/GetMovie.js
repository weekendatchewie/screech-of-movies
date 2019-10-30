import React from 'react';
import MovieCard from './MovieCard'
import Enter from './Enter'
import axios from 'axios'

class GetMovie extends React.Component {
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

export default GetMovie;