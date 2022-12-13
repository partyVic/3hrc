import React from 'react'

import img from '../../assets/images/news-title.png'

const NewsModal = () => {
    return (
        <div className='
        mx-4 my-4
        md:mx-12 lg:mx-40 xl:mx-72
        '>
            <div className='bg-rose-500 h-1 w-full mb-4 relative'>
                <div className='text-sm font-bold text-gray-500 absolute bg-white -top-2 pr-4'>
                    12-12-2022
                </div>
            </div>

            <div className='flex bg-[#f5f5f5] p-2 rounded'>
                <img
                    className='lg:w-[20%] md:w-[25%] w-[35%] rounded-l'
                    src={img} alt="" />
                <div>
                    <p>content</p>
                </div>

            </div>
        </div>
    )
}

export default NewsModal