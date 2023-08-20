import React from 'react'
import Button from './Button'
const CTA = () => {
  return (
    <div className='xs:flex-col sm:flex-col box-shadow bg-black-gradient-2 w-[90%] mb-[60px] p-[30px] flex items-center justify-between mx-auto'>
      <div>
        <h1 className='font-[600] text-[48px] leading-[67.2px] mb-[20px]'>Let’s try our service now!</h1>
        <p className='font-[400] text-[18px] leading-[28.8px] text-dimWhite'>
        Everything you need to accept card payments and<br /> 
        grow your business anywhere on the planet.
        </p>
      </div>
      <div className='xs:mt-[40px] xs:ml-[60%] sm:ml-[70%] sm:mt-[40px]'>
        <Button />
      </div>
    </div>
  )
}

export default CTA