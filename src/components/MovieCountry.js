import React from 'react'

const Countryandyears
function MovieCountry (props) {
    return(
        <div>
            <ul>
                <li>
                    <img src={props.movie.posterUrl} alt=' '/>
                    <p>{props.movie.years}</p>
                </li>
            </ul> 
        </div>
    )
}
export default MovieCard