import React from 'react'
// import GetStarted from './GetStarted'
import { robot, discount } from '../assets'
import Stats from './Stats'
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <div id='home' className='w-[90%] mb-[60px] mx-auto'>
      <div className="relative top-0 left-0 flex items-center justify-between xs:flex-col sm:flex-col">
        <div>
          <div className="xs:w-[80%] md:w-[85%] sm:w-[60%] w-[70%] rounded p-[8px] bg-discount-gradient border-[3px] flex items-center justify-start border-red-300">
            <img src={discount} alt="discount" className="block w-[32px] h-[32px]" />
            <h4 className='text-dimWhite text-[18px] ml-[10px]'><span className='text-white'>20%</span> Discount For <span className='text-white'>1Month</span> Account</h4>
          </div>
          <div className="next-started flex items-center justify-between">
            <div className="text-[72px] font-[600]">
              <h1>The Next</h1>
              <h1 className="text-gradient">Generation</h1>
            </div>
            <GetStarted />
          </div>
          <h1 className="text-[72px] font-[600]">Payment Method.</h1>
          <p className="xs:my-[20px] my-[40px] font-[400] text-[18px] text-dimWhite sm:w-[90%]">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="robot relative">
          <img src={robot} alt="robot" className='block w-[100%] h-[100%] z-[5]' />
          <div className="absolute w-[70%] h-[30%] top-[0%] right-[25%] pink__gradient z-[0]"></div>
          <div className="absolute w-[70%] h-[35%] top-[40%] right-[10%] rounded-full white__gradient z-[1]"></div>
          <div className="absolute w-[60%] h-[30%] top-[65%] right-[25%] blue__gradient z-[0]"></div>
        </div>
      </div>
      <Stats />
    </div>
  )
}

export default Hero