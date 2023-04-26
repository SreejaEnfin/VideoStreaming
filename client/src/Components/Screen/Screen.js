import React from 'react'
import video from '../img/dummy.webm'

function Screen() {
    return (
        <div>
            <div class="br-screen-share-wrapper">
                <video class="br-screen" autoplay>
                    <source src={video}></source>
                </video>
            </div>
        </div>
    )
}

export default Screen
