import React from 'react';
import './Enter.css';
import {Link}from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Audio from './audio'


function Enter (){
    let history=useHistory()
    return(
    <div className="EnterScreen">
        <div className="EcranAccueil">
            <div>
                <div className = 'titleEnterDiv'>
                    <p className='EnterTitle' >[</p>
                    <img className= 'recPoint' src='https://zupimages.net/up/19/44/0u0l.png'style={{width: "7%"}} alt =''/>
                    <p className="EnterTitle">SOM]</p>
                    
                </div>
                <Link to="/Home">
                <button className="EnterButton" type="button" onClick={event=>history.push("/Home")}>Cliquer pour découvrir l'horreur</button>
                </Link>

            </div>
        </div>
    </div>
    )
}

export default Enter