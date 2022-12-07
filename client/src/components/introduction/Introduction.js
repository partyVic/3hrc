import React from 'react'
import INTRO_IMG from '../../assets/images/body_Intro.jpg'
import { INTRO_BODY, INTRO_TITLE } from '../../dataBase/introduction'

const Introduction = () => {
    return (
        <div className='
            md:flex md:justify-end
            w-full h-full
            '
        >

            <div className='
                md:hidden
                h-1/5 flex
                '>
                <div className='h-4/5 w-1 bg-rose-500 rounded ml-4 mt-2.5'></div>
                <div className='w-full h-full mt-2 mx-4'>
                    <h2 className='text-lg font-bold text-rose-500'>{INTRO_TITLE}</h2>
                    <p className='mt-1 text-sm font-medium text-slate-500'>{INTRO_BODY}</p>
                </div>
            </div>

            <div className='
                md:w-full md:h-full
                h-4/5
                '>
                <img
                    className='
                        object-cover h-full w-full
                        '
                    src={INTRO_IMG}
                    alt="Introduction" />

                <div className='
                    md:absolute md:flex md:h-1/4 md:w-2/5 md:bg-[rgba(255,255,255,0.4)] md:top-80 md:left-14 md:rounded-xl backdrop-opacity-10 backdrop-invert bg-white/30
                    hidden
                    '>
                    <div className='h-4/5 w-1 bg-rose-500 rounded ml-4 mt-6'></div>
                    <div className='w-full h-full mt-4 ml-10 mr-4'>
                        <h2 className='text-4xl font-bold text-rose-500'>{INTRO_TITLE}</h2>
                        <p className='mt-4 text-lg font-medium text-white'>{INTRO_BODY}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction