import React from 'react'

import img from '../../assets/images/news-title.png'

const NewsModal = () => {
    return (
        <div className='
        flex
        '>
            <img className='w-[20%]' src={img} alt="" />
            <div>
                <span>time</span>
                <p>content</p>
            </div>
        </div>
    )
}

export default NewsModal