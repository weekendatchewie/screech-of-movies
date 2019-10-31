import React from 'react';
import MovieCard from './MovieCard'
import axios from 'axios'
import './GetAllMovies.css';
import VideoZombie from './VideoZombie'
import VideoSlasher from './VideoSlasher'
import VideoGhost from './VideoGhost'
import VideoRandom from './VideoRandom'

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
    this.handleRandomClick=this.handleRandomClick.bind(this)

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
    this.setState({ onlyRandom:false})
  }
  handleShowSlascherClick() {
    this.setState({ onlySlascher: !this.state.onlySlascher});
    this.setState({ onlyZombie: false });
    this.setState({ onlyGhost: false })
    this.setState({ onlyRandom:false})
  }
  handleShowGhostClick() {
     this.setState({ onlyGhost: !this.state.onlyGhost });
     this.setState({ onlySlascher: false });
     this.setState({ onlyZombie: false });
     this.setState({ onlyRandom:false})
  }
  handleRandomClick() {
    this.setState({ onlyGhost: false });
    this.setState({ onlySlascher: false });
    this.setState({ onlyZombie: false });
    this.setState({ onlyRandom:!this.state.onlyRandom})
 }


  render() {
    return (
      <div className="home">
        <div className="buttonNav">
          <button className="buttonClick" onClick={this.handleRandomClick}>
          Random
          </button>          
          <button className="buttonClick" onClick={this.handleShowZombieClick}>
          Zombie
          </button>
          <button className="buttonClick" onClick={this.handleShowGhostClick}>
          Ghost
          </button>
         <button className="buttonClick" onClick={this.handleShowSlascherClick}>
          Slasher
          </button>
          <p className="som">[.SOM] sélectionnez votre frayeur</p>
        </div>

        <div className="affichage">
          {/* <p className="style">Sélectionner votre style</p> */}
        <div className="carte">
        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlyRandom===true){
              if(movie.id===(Math.floor(Math.random() * 4)||movie.id===Math.floor(Math.random() * 4))){
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
        ))
        }
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
        ))
        }

        {this.state.movies
        .filter(
          movie => {
            if (this.state.onlyGhost===true){
              if(movie.id===75||movie.id===82){
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
              if(movie.id===54||movie.id===67){
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
        ))
        } 
        </div>
        <div className="VideoPlay">
          {this.state.onlyZombie === true ? <VideoZombie /> : ""}
          {this.state.onlyGhost === true ? <VideoGhost /> : ""}
          {this.state.onlySlascher === true ? <VideoSlasher /> : ""}
          {this.state.onlyRandom === true ? <VideoRandom /> : ""}
        </div>
      </div>
      </div>
    );
  }
}

export default GetAllMovies;