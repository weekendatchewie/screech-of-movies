import React from 'react';
import './VideoZombie.css'

function VideoZombie (){
    return(
    <div className="videoZombie">
       <iframe width="952" height="535" src="https://www.youtube.com/embed/videoseries?list=PL60B29F446889D1BE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}


export default VideoZombie