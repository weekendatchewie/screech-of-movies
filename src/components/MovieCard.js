import React from 'react'
 
function MovieCard (props) {
    return(
        <div>
            <img src={props.movie.posterUrl} alt=''/>
            <p>{props.movie.title}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.year}</p>
        
           
        </div>
    )
}
export default MovieCard