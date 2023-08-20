import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='w-[90%] mb-[60px] mx-auto'>
      <div className='flex items-start justify-between border-dimWhite border-b-[2px] xs:flex-col sm:flex-col'>
        <div className='py-[20px]'>
          <div>
            <img src={logo} alt="logo" className='block w-[100%] h-[100%]' />
          </div>
          <p className='my-[15px] font-[400] text-[18px] leading-[28.8px] text-dimWhite'>
            A new way to make payment<br />
            easy, reliable and secure.
          </p>
        </div>
        <div className='w-[65%] flex items-start justify-between border-dimWhite xs:w-[100%] sm:w-[100%] md:w-[60%]'>
          {footerLinks.map(footerLink => {
          return (
            <div>
              <h3 className='mb-[20px] font-[500] text-[18px] leading-[27px] text-white'>{footerLink.title}</h3>
              <ul>{footerLink.links.map(link => {
                return (
                  <li className='my-[10px] [font-[400] text-[16px] leading-[24px] text-dimWhite'><a href={`${link.link}`}>{link.name}</a></li>
                )
              })}</ul>
            </div>
          )
          })}
        </div>
      </div>
      <div className='my-[10px] flex items-center justify-between xs:flex-col'>
        <h3 className='my-[15px] [font-[400] text-[18px] leading-[27px] text-dimWhite'>2023 HooBank. All Rights Reserved.</h3>
        <ul>{socialMedia.map(media => {
          return (
            <li key={media.id} className='inline-block ml-[20px]'>
              <a href={`${media.link}`}>
                <img src={media.icon} alt="img" className='block w-[100%] h-[100%]' />
              </a>
            </li>
          )
          })}</ul>
      </div>
    </div>
  )
}

export default Footer