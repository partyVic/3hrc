import React from 'react'
import { useNavigate } from 'react-router-dom'
import NEWS_IMG from '../../assets/images/news-title.png'

const NewsBoard = () => {
    const navigate = useNavigate()

    return (
        <div className="relative bg-[#f5f5f5] md:mr-8 md:my-4 md:rounded-r-lg">
            <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={NEWS_IMG}
                    alt="news section"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>
                    <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                    <p className="mt-3 text-lg text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                        scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                        tincidunt duis.
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                            <span
                                onClick={() => navigate('/news')}
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-[rgba(255,255,255,0.8)] bg-rose-500 hover:bg-rose-600 cursor-pointer"
                            >
                                Visit the help center
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBoard