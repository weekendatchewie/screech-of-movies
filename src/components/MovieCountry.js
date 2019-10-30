import React from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';


class MovieCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        };
        this.getMovieCountry = this.getMovieCountry.bind(this);

    }


    getMovieCountry () {

    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      
      .then(response => response.data) 
      
      .then(data => {
        console.log(data)
        this.setState({
          movie: data.movies.country[0],
        })
    })}
    

    render() {

    return (
    <div>
        {this.state.movie.filter(item => item.country === 'United_States')
                        .map(item => (
            <MovieCard title={item.title} posterUrl={item.posterUrl} director={item.director} year={item.year} country={item.country} />
        ))}
    </div>
);
                        }
                    }

export default MovieCountry;
