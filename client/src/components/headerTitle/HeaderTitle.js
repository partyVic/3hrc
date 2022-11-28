import React from 'react'
import QuestionMarkCircle from '../icons/question-mark-circle'
import Radio from '../icons/radio'

const headerTitle = [
    { title: '3HCR' },
    { title: 'Radio' },
]

const headerItems = [
    { item: 'About us' },
    { item: 'Help & support' }
]

const HeaderTitle = () => {
    return (
        <div className='flex w-3/4 h-full items-center justify-between'>
            <div>3HCR</div>
            <div className='flex text-sm text-[#4d4d54]'>
                <div className='flex mr-8 cursor-pointer'>
                    <span className='mr-1'>
                        <QuestionMarkCircle />
                    </span>
                    <span>About us</span>
                </div>
                <div className='flex  cursor-pointer'>
                    <span className='mr-1 text-indigo-500'>
                        <Radio />
                    </span>
                    <span className='bg-indigo-500 text-white px-1 rounded'>Help & support</span>
                </div>
            </div>

        </div>
    )
}

export default HeaderTitle