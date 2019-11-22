import React from 'react';
import './VideoGhost.css'

function VideoZombie (){
    return(
    <div className="videoZombie">
       <iframe src="https://www.youtube.com/embed/videoseries?list=PL1CtsrPjDfapcs2I1TqVVHDPxYu4-Wgt8&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}


export default VideoZombie