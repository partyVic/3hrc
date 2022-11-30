import React from 'react'
import Introduction from '../components/introduction/Introduction'

const HomeScreen = () => {
  return (
    <div>
      <div className='
      md:h-[40rem]
      h-[32rem]
      '>
        <Introduction />
      </div>
      <div className='h-96 bg-fuchsia-100'></div>
      <div className='h-96 bg-fuchsia-100'></div>
      <div className='h-96 bg-fuchsia-100'></div>
      <div className='h-96 bg-fuchsia-100'></div>
    </div>
  )
}

export default HomeScreen