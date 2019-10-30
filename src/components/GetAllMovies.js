import React from 'react';
import MovieCard from './MovieCard'
import axios from 'axios'
import './GetAllMovies.css';

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
    this.handleShowSlascherClick=this.handleShowSlascherClick.bind(this);
    this.handleShowGhostClick=this.handleShowGhostClick.bind(this)

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
    this.setState({ onlySlascher: false });
    this.setState({ onlyGhost: false })

  }
  handleShowSlascherClick() {
    this.setState({ onlySlascher: !this.state.onlySlascher});
    this.setState({ onlyZombie: false });
    this.setState({ onlyGhost: false })
  }
  handleShowGhostClick() {
     this.setState({ onlyGhost: !this.state.onlyGhost });
     this.setState({ onlySlascher: false });
     this.setState({ onlyZombie: false });
   }


  render() {
    return (
      <div className="home">
        <div className="buttonNav">
          <button className="buttonClick" onClick={this.handleShowZombieClick}>
          Zombie
          </button>
          <button className="buttonClick" onClick={this.handleShowGhostClick}>
          Ghost
          </button>
         <button className="buttonClick" onClick={this.handleShowSlascherClick}>
          Slascher
          </button>
        </div>
      
        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlyZombie===true){
              if(movie.id===80||movie.id===81){
                return true
              }else{
                return false
              }
            }else{
              return false
            }
          }
        )
        .map((movie)=>(
          <MovieCard {...movie}/>
        ))}

        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlyGhost===true){
              if(movie.id===3||movie.id===54){
                return true
              }else{
                return false
              }
            }else{
              return false
            }
          }
        )
        .map((movie)=>(
          <MovieCard {...movie}/>
        ))}

        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlySlascher===true){
              if(movie.id===76||movie.id===12){
                return true
              }else{
                return false
              }
            }else{
              return false
            }
          }
        )
        .map((movie)=>(
          <MovieCard {...movie}/>
          
        ))}
        <video />
      </div>
    );
  }
}

export default GetAllMovies;