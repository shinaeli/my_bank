import { useState } from 'react'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'
const 
Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-[90%] mb-[60px] mx-auto'>
      <nav className='flex items-center justify-between py-[10px] relative top-0 left-0'>
        <div className=''>
          <img src={logo} alt="logo" className='block w-[124px] h-[32px]' />
        </div>
        <img src={menu} alt="menu" onClick={() => setOpen(!open)} className={`${open ? 'hidden' : 'block'} md:hidden lg:hidden xl:hidden w-[5%] h-[5%]`} />
        <img src={close} alt="close menu" onClick={() => setOpen(!open)} className={`${open ? 'block' : 'hidden'} md:hidden lg:hidden xl:hidden w-[5%] h-[5%]`} />
        {open && (<ul className='z-[5] sidebar bg-black-gradient-2 py-[30px] px-[40px] absolute top-[100%] right-0'>
          {navLinks.map(link => {
            return (
              <li key={link.id} className='block my-[10px] p-[10px] font-popins font-normal cursor-pointer'>
                <a href={`#${link.id}`} className='text-dimWhite hover:text-dimBlue-600 text-xl'>{link.title}</a>
              </li>
            )
          })}
        </ul>)}
        <ul className='xs:hidden sm:hidden'>
          {navLinks.map(link => {
            return (
              <li key={link.id} className='inline-block mr-[50px] font-popins font-normal cursor-pointer'>
                <a href={`#${link.id}`} className='text-dimWhite hover:text-dimBlue-600 text-xl'>{link.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar