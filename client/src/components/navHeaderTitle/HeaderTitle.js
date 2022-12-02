import React from 'react'
import QuestionMarkCircle from '../icons/question-mark-circle'
import { useNavigate } from 'react-router-dom'
import Radio from '../icons/radio'
import Logo from '../Logo'

// const headerTitle = [
//     { title: '3HCR' },
//     { title: 'Radio' },
// ]

// const headerItems = [
//     { item: 'About us' },
//     { item: 'Help & support' }
// ]

const NavHeaderTitle = () => {
    const navigate = useNavigate()

    return (
        <div className='
        lg:w-3/4 
        flex w-5/6 h-full items-center justify-between
        '>
            <div className='cursor-pointer' onClick={() => navigate('/')}>
                3HCR OMEO
                <Logo />
            </div>

            <div className='flex text-sm text-[#4d4d54]'>
                {/* <div className='flex mr-8 cursor-pointer items-center'>
                    <span className='mr-1'>
                        <QuestionMarkCircle />
                    </span>
                    <span>About us</span>
                </div> */}
                <div
                    className='flex cursor-pointer'
                    onClick={() => navigate('/support')}
                >
                    <span className='mr-1 mt-1 text-indigo-500'>
                        <Radio />
                    </span>
                    <span className='bg-indigo-500 text-white px-3 py-1 rounded-full'>Enquires & support</span>
                </div>
            </div>

        </div>
    )
}

export default NavHeaderTitle