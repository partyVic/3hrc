import React from 'react'
import Phone from './icons/phone'
import MapPin from './icons/map-pin'
import Envelope from './icons/envelope'
import Facebook from './icons/facebook'
import Linkedin from './icons/linkedin'
import Youtube from './icons/youtube'

const Footer = () => {
  return (
    <div className='
    md:flex bg-[#1b2024] md:px-20 xl:px-40
    block py-10 px-10
    '>

      <div className='font-lato text-sm md:mr-20 xl:mr-32'>
        <h4 className='text-[#9ba4ac]'>CONTACT US</h4>
        <div className='mt-2'>
          <span className='text-white flex mb-2'>
            <Phone />
            <p className='ml-2'>0493 088 902</p>
          </span>
          <div className='text-white'>
            <span className='flex'>
              <MapPin />
              <p className='ml-2'>73 Sebastopol Hill Road</p>
            </span>
            <p className='mb-2 ml-7'>Omeo, Victoria 3898 Australia</p>
          </div>

          <span className='text-white flex'>
            <Envelope />
            <p className='ml-2'>oscarefem@gmail.com</p>
          </span>
        </div>
      </div>

      <div className=' font-lato text-sm md:mr-20 md:mt-0 mt-6 xl:mr-32'>
        <h4 className='text-[#9ba4ac]'>FOLLOW US</h4>
        <div className='flex mt-2'>
          <span className='text-white mr-6'>
            <a href="https://www.facebook.com/profile.php?id=100010179306405">
              <Facebook />
            </a>
          </span>
          <span className='text-white mr-6'>
            <Linkedin />
          </span>
          <span className='text-white'>
            <Youtube />
          </span>
        </div>
      </div>

      <div className=' font-lato text-sm md:mt-0 mt-6'>
        <h4 className='text-[#9ba4ac]'>&copy;&nbsp;COPYRIGHT</h4>
        <div className='text-white mt-2'>
          <p className='mb-2'>3HCR High Country Radio FM 90.9 & 97.3</p>
          <p className='mb-2'>Omeo Shire Community Access Radio Inc.</p>
          <p>(OSCAR) ABN 48 876 068 071</p>
        </div>
      </div>
    </div>
  )
}

export default Footer