import React from 'react';
import GetAllMovies from './components/GetAllMovies'
import GetMovie from './components/GetMovie'
import Enter from './components/Enter'

function App () {
  
    return (
      <div className="App">
        <Enter />
        <GetMovie />
        <GetAllMovies />
      </div>
    );
}


export default App;
