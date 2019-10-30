import React from 'react';
import './MovieCard.css';
 
function MovieCard (props) {
    console.log(props)
    return(
        <div className="movieCard">
            <img className="affiche" src={props.posterUrl} alt='affiche'/>
            <div className="description">
                <p className="texte">Titre : </p>
                <h2>{props.title.replace(/_/g," ")}</h2>
                <p className="texte">Réalisateur : </p>
                <h3>{props.director.replace(/_/g," ")}</h3>
                <p className="texte">Année : </p>
                <h3>{props.year}</h3>
            </div>
           
        </div>
    )
}
export default MovieCard