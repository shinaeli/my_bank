import React from 'react'
import { quotes } from '../assets'


const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div key={id} className='xs:w-[80%] sm:w-[80%] md:w-[40%] w-[30%] py-[50px] px-[25px] rounded-[15px] feedback-card'>
      <img src={quotes} alt="quotes" className='block' />
      <p className='my-[40px] font-[400] text-[18px] leading-[32.4px] text-white'>{content}</p>
      <div className='flex items-center justify-start'>
        <div className='w-[15%] h-[15%]'>
          <img src={img} alt={`${img}`} className='block' />
        </div>
        <div className='ml-[10px]'>
          <h3 className='font-[400] text-[20px] leading-[32px] text-white'>{name}</h3>
          <h5 className='font-[400] text-[16px] leading-[24px] text-dimWhite'>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard