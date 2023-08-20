import React from 'react'
import Button from './Button'
import { features } from '../constants'

const Business = () => {
  return (
    <div id='features' className='w-[90%] mb-[60px] flex items-start justify-between mx-auto xs:flex-col sm:flex-col md:flex-col'>
      <div className="xs:w-[100%] xs:mb-[20px] sm:w-[100%] sm:mb-[20px] md:mb-[15px]">
        <h1 className='font-[600] text-[48px] leading-[76.8px]'>
        You do the business,<br />
        we’ll handle the money.
        </h1>
        <p className='xs:w-[100%] w-[70%] my-[30px] font-[400] text-[18px] leading-[30.6px] text-dimWhite sm:w-[90%] md:w-[90%]'>
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. 
        But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="cursor-pointer">
        {features.map(feature => {
          return (<div key={feature.id} className='feature-card rounded-[10px] flex items-center justify-between mb-[35px] p-[10px] md:justify-start'>
            <div className='bg-discount-gradient rounded-full p-[12px]'>
              <img src={feature.icon} alt={`${feature.icon}`} className='block' />
            </div>
            <div className="rounded ml-[8px]">
              <h2 className='text-[18px] font-[600]'>{feature.title}</h2>
              <p className='text-[16px] font-[600] leading-[24px] text-dimWhite'>{feature.content}</p>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Business