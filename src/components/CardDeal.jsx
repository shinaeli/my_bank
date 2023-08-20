import React from 'react'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <div id='product' className='w-[90%] mb-[60px] flex items-start justify-between mx-auto xs:flex-col sm:flex-col md:flex-col'>
      <div className="py-[40px]">
        <h1 className='font-[600] text-[48px] leading-[76.8px]'>
        Find a better card deal<br />
        in few easy steps.
        </h1>
        <p className='w-[60%] my-[30px] font-[400] text-[18px] leading-[30.6px] text-dimWhite xs:w-[100%] sm:w-[100%] md:w-[100%]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Animi adipisci incidunt, fugit, necessitatibus, 
        ullam omnis laudantium mollitia autem laboriosam officiis nam non dolorem hic rem ducimus? 
        Dicta voluptas modi, illo dolores error minima odio suscipit natus magni eius, veritatis fugit?
        </p>
        <Button />
      </div>
      <div>
        <img src={card} alt='card' className='block w-[100%] h-[100%]' />
      </div>
    </div>
  )
}

export default CardDeal