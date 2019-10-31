import React from 'react';
import './Enter.css';
import {Link}from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const img ='https://zupimages.net/up/19/44/er2p.png'
function Enter (){
    let history=useHistory()
    return(
    <div className="EnterScreen">
        <div className="EcranAccueil">
            <div>
                <div className = 'titleEnterDiv'>
                    <p className='EnterTitle' >[</p>
                    <img className= 'recPoint' src={img} alt =''/>
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