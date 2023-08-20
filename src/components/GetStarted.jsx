import React from 'react'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className='xs:absolute xs:top-[100%] xs:right-[40%] w-[100px] h-[100px] text-white p-[20px] border-[2px] rounded-full text-gradient cursor-pointer'>
      <div className="started flex items-center justify-center">
        <h3>Get</h3>
        <img src={arrowUp} alt="arrow-up" className='block' />
      </div>
      <h3>Started</h3>
    </div>
  )
}

export default GetStarted