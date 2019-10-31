import React from 'react';
import './Enter.css';
import {Link}from 'react-router-dom';
import {useHistory} from 'react-router-dom';


function Enter (){
    let history=useHistory()
    return(
    <div className="EnterScreen">
        <div className="EcranAccueil">
            <h1 className="EnterTitle">[SOM]</h1>
            <Link to="/Home">
            <button className="EnterButton" type="button" onClick={event=>history.push("/Home")}>Cliquer pour découvrir l'horreur</button>
            </Link>
        </div>
    </div>
    )
}

export default Enter