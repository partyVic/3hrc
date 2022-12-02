import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './radio.css'
import CRN_LOGO from '../../assets/images/CRN-Logo-RGB-Colour.webp'
import CBF_LOGO from '../../assets/images/CBF-Logo_RGB-Screens.webp'
import AUDIO_URL from '../../dataBase/audioUrl'


const Radio = () => {
    return (
        <div className='
            md:w-full md:flex md:justify-evenly md:items-center
            h-full
        '>

            <div className='
            md:flex flex-col
            hidden
            '>
                <img className='w-28 rounded px-2 py-2 mb-2 object-cover bg-yellow-400' src={CRN_LOGO} alt="" />
                <img className='w-28 rounded object-cover' src={CBF_LOGO} alt="" />
            </div>

            <div className='
            md:w-3/5 md:h-2/3
            h-full relative
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

                <div className='md:hidden'>
                    <span className='text-xs bg-yellow-400 rounded-lg px-2 py-0.5 font-serif absolute left-6 bottom-2'>FM 90.9 & 97.3 </span>
                </div>
                <div className='md:hidden'>
                    <span className='text-xs bg-lime-500 rounded-lg px-2 py-0.5 font-serif absolute right-7 bottom-2'>3HCR OMEO</span>
                </div>
            </div>

            <div className='
            md:flex flex-col
            hidden
            '>
                <span className='block text-xs bg-yellow-400 rounded-full mb-2 px-2 py-0.5 font-serif'>&nbsp;&nbsp;FM 90.9</span>
                <span className='block text-xs bg-teal-400 rounded-full mb-2 px-2 py-0.5 font-serif'>&nbsp;&nbsp;FM 97.3</span>
                <span className='block text-xs bg-lime-500 rounded-full px-2 py-0.5 font-serif'>3HCR OMEO</span>
            </div>


        </div>
    )
}

export default Radio