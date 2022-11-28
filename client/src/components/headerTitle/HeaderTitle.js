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
        <div className='flex w-full h-full items-center'>
            <div>3HCR</div>
            <div className='flex'>
                <span className=' text-red-500'>
                    <QuestionMarkCircle />
                </span>
                <span>About us</span>
                <span className=' text-red-500'>
                    <Radio />
                </span>
                <span className='bg-red-500 p-1'>Help & support</span>
            </div>

        </div>
    )
}

export default HeaderTitle