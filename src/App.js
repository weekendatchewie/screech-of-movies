import React from 'react';
import GetAllMovies from './components/GetAllMovies'
import GetMovie from './components/GetMovie'
import Enter from './components/Enter'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App () {
  
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Enter} />

          <Route path="/Home" exact component={GetAllMovies} />
        </Router>
      </div>
    );
}


export default App;
