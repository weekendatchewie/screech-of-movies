import React from 'react'
 
function MovieCard (props) {
    console.log(props)
    return(
        <div>
            <img src={props.posterUrl} alt=''/>
            <p>{props.title}</p>
            <p>{props.director}</p>
            <p>{props.year}</p>
        
           
        </div>
    )
}
export default MovieCard