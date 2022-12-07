import React from 'react'
import QuestionMarkCircle from '../icons/question-mark-circle'
import { useNavigate } from 'react-router-dom'
import Radio from '../icons/radio'
import Logo from '../Logo'
import CBAA from '../../assets/images/cbaa-logo.png'

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
            <div className='flex justify-center items-center'>
                <div className='cursor-pointer' onClick={() => navigate('/')}>
                    3HCR Omeo
                    <Logo />
                </div>
                <span className=''>
                    <img className='h-10 ml-20 px-2 bg-[#ecf0f1] rounded cursor-pointer' src={CBAA} alt="cbaa" />
                </span>
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
                    <span className='bg-indigo-500 text-white px-3 py-1 rounded-full'>Enquiry & support</span>
                </div>
            </div>

        </div>
    )
}

export default NavHeaderTitle