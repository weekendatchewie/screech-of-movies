import React from 'react';
import MovieCard from './MovieCard'
import axios from 'axios'

class GetAllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyZombie:false,
      onlySlascher:false,
      onlyGhost:false,
      movies: []
    };
    this.componentDidMount=this.getAllMovies();
    this.getAllMovies = this.getAllMovies.bind(this); 
    this.handleShowZombieClick=this.handleShowZombieClick.bind(this);

  }
  getAllMovies() {

      axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      
      .then(response => response.data) 
      
      .then(data => {
          this.setState({
          movies: data.movies,
        });
    });
      
  }

  handleShowZombieClick() {
    this.setState({ onlyZombie: !this.state.onlyZombie });
  }
  // handleShowSlascherClick() {
  //   this.setState({ onlySlascher: !this.state.onlySlascher });
  // }
  // handleShowGhostClick() {
  //   this.setState({ onlyGhost: !this.state.onlyGhost });
  // }


  render() {
    return (
      <div >
        <button onClick={this.handleShowZombieClick}>
          Zombie
        </button>
        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlyZombie===true){
              if(movie.id===6){
                return true
              }else{
                return false
              }
            }else{
              return false
            }
            // this.state.onlyZombie
            // ?movie.id===2||movie.id===3||movie.id===4||movie.id===5||movie.id===6
            // :false
          }
        )
        .map((movie)=>(
          <MovieCard {...movie}/>
        ))}
        {/* <MovieCard movie={this.state.movie}/>
        <button type="button" onClick={this.getAllMovies}>Get Movie</button>  */}
      </div>
    );
  }
}

export default GetAllMovies;