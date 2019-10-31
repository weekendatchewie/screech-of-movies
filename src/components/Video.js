import React from 'react';
import { Player } from 'video-react';

// export default props => {
//     return (
//       <Player
//         playsInline
//         poster="/assets/poster.png"
//         src="https://www.youtube.com/watch?v=OoTx1cYC5u8"
//       />
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL60B29F446889D1BE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     );
//   };
function Video (){
    return(
    <div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL60B29F446889D1BE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )
}


export default Video