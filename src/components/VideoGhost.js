import React from 'react';
import './VideoGhost.css'

function VideoGhost (){
    return(
    <div className="videoGhost">
       <iframe src="https://www.youtube.com/embed/videoseries?list=PLv4sG5sN934tu7v8oPalLTDXJnFRbFTmZ&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}


export default VideoGhost