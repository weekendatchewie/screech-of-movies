import React from 'react';
import './VideoGhost.css'

function VideoSlasher (){
    return(
    <div className="videoSlasher">
       <iframe src="https://www.youtube.com/embed/videoseries?list=PLv4sG5sN934tDo-lRjgEhkuuD1f2Xz6_N&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}


export default VideoSlasher