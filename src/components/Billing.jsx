import React from 'react'
import { bill, apple, google } from '../assets'

const Billing = () => {
  return (
    <div className='w-[90%] mb-[60px] flex items-center justify-between mx-auto xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse md:items-start md:justify-center'>
      <div className='relative top-0 left-0'>
        <img src={bill} alt="bill" className='block w-[100%] h-[100%] z-[5]' />
        <div className="absolute white__gradient left-[0%] top-[0%] w-[20%] h-[50%] z-[3]"></div>
        <div className="absolute pink__gradient left-[0%] top-[50%] w-[30%] h-[50%] z-[0]"></div>
      </div>
      <div className='w-[55%] xs:ml-0 sm:ml-0 md:ml-0 xs:w-[100%] sm:w-[100%] md:w-[100%]'>
        <h1 className='leading-[76.8px] font-[600] text-[48px]'>
          Easily control your <br />
          billing & invoicing.
        </h1>
        <p className='xs:w-[100%] w-[75%] my-[30px] leading-[28.8px] font-[400] text-[18px] text-dimWhite sm:w-[90%] md:w-[100%]'>
          Elit enim sed massa etiam. 
          Mauris eu adipiscing ultrices ametodio aenean neque. 
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <img src={apple} alt="apple" className='inline-block mr-[10px]' />
        <img src={google} alt="google" className='inline-block mr-[10px]' />
      </div>
    </div>
  )
}

export default Billing