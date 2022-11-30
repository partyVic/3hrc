import React from 'react'
import introImg from '../../assets/images/body_Intro.jpg'

const Introduction = () => {
    return (
        <div className='
        md:flex md:justify-end
        w-full h-full
        '>
                <div className='
            md:hidden
            h-1/5 bg-red-200
            '>
                    Intro
                </div>
                <div className='
            md:w-full md:h-full
            h-4/5
            '>
                    <img
                        className='
                    object-cover h-full w-full
                    '
                        src={introImg}
                        alt="Introduction" />
                </div>
        </div>
    )
}

export default Introduction