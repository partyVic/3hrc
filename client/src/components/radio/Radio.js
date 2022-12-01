import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './radio.css'
import AUDIO_URL from '../../dataBase/audioUrl'

// player
// md:h-2/3 md:top-7 md:left-32 md:relative
// h-full
const Radio = () => {
    return (
        <div className='
            md:w-full md:flex md:justify-center md:items-center
            h-full
        '>
            <div className='
            md:w-3/5 md:h-2/3
            h-full
            '>

                <AudioPlayer
                    className="player"
                    src={AUDIO_URL}
                    showJumpControls={false}
                    layout="stacked"
                    customProgressBarSection={[]}
                    customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                    autoPlayAfterSrcChange={false}
                />
            </div>
        </div>
    )
}

export default Radio