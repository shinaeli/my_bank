import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <div className='w-[90%] mb-[60px] mx-auto'>
      <div className='flex items-center justify-between mb-[60px] xs:flex-col xs:items-start sm:flex-col sm:items-start md:flex-col md:items-start'>
        <h1 className='font-[600] text-[48px] leading-[81.6px]'>
          What people are<br />
          saying about us.
        </h1>
        <p className='my-[30px] font-[400] text-[18px] leading-[32.4px] text-dimWhite'>
          Everything you need to accept card payments<br />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <div className='relative top-0 right-0 flex items-center justify-between xs:flex-col sm:flex-col md:items-start'>
        {feedback.map(feedback => {
          return (<FeedbackCard {...feedback} />)
        })}
        <div className="absolute blue__gradient right-[0%] top-[0%] w-[20%] h-[60%] z-[3]"></div>
      </div>
    </div>
  )
}

export default Testimonials