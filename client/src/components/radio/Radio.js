import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './radio.css'
import AUDIO_URL from '../../dataBase/audioUrl'


const Radio = () => {
    return (
        <div className='
            md:w-2/5
            h-full
        '>
            <AudioPlayer
                className="
                player
                md:h-2/3
                h-full
                "
                src={AUDIO_URL}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
            />
        </div>
    )
}

export default Radio