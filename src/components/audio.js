import React from 'react';


function Audio (){
    return(
        <figure>
            <audio 
                controls
                src="son.mp3">
                    <code>audio</code>
            </audio>
        </figure>
        //     <button class="control" onclick="play('audioPlayer', this)">Play</button>
        //     <button class="control" onclick="resume('audioPlayer')">Stop</button>
        // </figure>
    )
}
export default Audio


{/* <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="/media/examples/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure> */}
