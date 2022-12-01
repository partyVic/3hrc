import React from 'react'
import AUDIO_URL from '../../dataBase/audioUrl'

const Radio = () => {
    return (
        <div>

            <audio
                
                controls
                src={AUDIO_URL}>
            </audio>
        </div>
    )
}

export default Radio