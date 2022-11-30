import React from 'react'
import introImg from '../../assets/images/body_Intro.jpg'

const Introduction = () => {
    return (
        <div className='
        md:flex
        w-full h-full
        '>
            <div className='
            md:w-1/3 md:h-full
            ml-4 h-1/5
            '>
                Intro
            </div>
            <div className='
            md:w-2/3 md:h-full
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