import React from 'react'

const NewsModal = ({ date, imageTitle, content, title }) => {
    return (
        <div className='
        mx-4 py-12
        md:mx-12 lg:mx-40 xl:mx-72
        '>
            {/* <div className='bg-rose-400 h-1 w-full mb-2 relative'>
                <div className='text-sm font-bold text-gray-500 absolute bg-white -top-2 pr-4'>
                    {date}
                </div>
            </div> */}

            <div className='flex bg-[#f5f5f5] p-2 rounded'>
                <img
                    className='lg:w-[20%] md:w-[25%] w-[35%] rounded-l'
                    src={imageTitle} alt="" />
                <div>
                    <div className='px-4'>
                        <div className='flex justify-start items-center'>
                            <span className='text-sm font-bold text-white bg-rose-500 px-2'>{date}</span>
                            <p className='ml-4 font-extrabold tracking-wide'>{title}</p>
                        </div>
                        <p className=''>{content}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsModal