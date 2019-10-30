import React from 'react';
import ShowMovie from './ShowMovie';

const movie = [
    {"id": 1,
    "title":"Hereditary",
    "director": "Ari_Aster",
    "year": 2018,
    "country": "United_States",
    "posterurl": "https://nsa40.casimages.com/img/2019/10/07/1910070355402418.jpg"
    },
    {"id": 2,
    "title":"Us",
    "director": "Jordan_Peele",
    "year": 2019,
    "country": "United_States",
    "posterurl": "https://nsa40.casimages.com/img/2019/10/07/191007035726264614.jpg"
    },
    {"id": 3,
    "title":"Scream_2",
    "director": "Wes_Craven",
    "year": 1997,
    "country": "United_States",
    "posterurl": "https://nsa40.casimages.com/img/2019/10/07/191007035836534706.jpg"
    },
  ] 

class ListOfMovie extends React.Component {
  constructor(props) {
    super(props)
  }
  randomNumber() {
    let numbers = [1, 2, 3]
    let idNumbers = (Math.floor(Math.random() * 3))
    console.log(idNumbers)
    return idNumbers
  }
  render() {
    const movieNumber = this.randomNumber()
    let movieArray = []
    const showMovieCall = <ShowMovie {...movie[movieNumber]} />
    for (let i = 0; i < movieNumber; i++) {
      movieArray.push(showMovieCall)
    }
    console.log(movieArray)
    return (
      <div>
        {movieArray.map(showMovieCall => {
          return <div>{showMovieCall}</div>
        })}
      </div>
    )
  }  
}


export default ListOfMovie;