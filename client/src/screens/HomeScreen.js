import React from 'react'
import Introduction from '../components/introduction/Introduction'
import NewsBoard from '../components/news/NewsBoard'
import Radio from '../components/radio/Radio'
import Live from '../components/icons/Live'
import './homescreen.css'

// Audio player dark background
// HomeScreen-Radio
// w-11/12 h-full bg-[#4d4d54] rounded-lg -mt-12 mx-auto
// md:w-3/4 md:-mt-20

// Audio player dark background
// HomeScreen-Radio
// w-11/12 h-full rounded-lg -mt-12 mx-auto backdrop-opacity-10 backdrop-invert bg-white/30
// md:w-3/4 md:-mt-20

const HomeScreen = () => {
  return (
    <div>
      <div className='
      md:h-[40rem]
      h-[28rem]
      '>
        <Introduction />
      </div>


      {/* //! parent div: set to relative */}
      <div className='
      md:h-44 
      w-full h-24 relative
      '>
        {/* //! child div: set to -margin to goes on top of other div */}
        <div className='
        HomeScreen-Radio
        w-11/12 h-full bg-[#4d4d54] rounded-lg -mt-12 mx-auto
        md:w-3/4 md:-mt-20
        '>
          <Radio />
        </div>
      </div>


      <div className='h-48 bg-fuchsia-100'><Live />Discover: Radio Program Overview under construction</div>


      {/* <div
        className='
        md:h-[32rem] xl:h-[24rem] md:flex
        bg-fuchsia-300
        '>
        <NewsBoard />
      </div> */}
      <div>
        <NewsBoard />
      </div>

    </div>
  )
}

export default HomeScreen