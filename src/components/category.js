import React from 'react';

function DisplayFilm(props) {
    return (
      <div>
        <img
          src={props.movie.posterUrl}
          alt={props.movie.title}
        />
          
          <p>
            Name: {props.movie.title}
          </p>
          <p>date: {props.movie.year}</p>
          <p>
            réal: {props.movie.director}
            </p>
            <p>pays: {props.movie.country}</p>
      
      </div>
    );
  };

export default DisplayFilm;