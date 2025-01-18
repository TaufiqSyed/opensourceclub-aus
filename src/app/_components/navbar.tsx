'use client'

import { useState } from 'react'
import { NavbarLink } from './navbar-link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-row justify-center m-0 absolute w-screen px-8 z-[2]'>
      <div className='bg-[#020103] max-w-[700px] flex flex-row items-center py-4 px-5 mt-4 border-gray-800 border rounded-xl w-full'>
        <a href='#landing' className='mr-16'>
          <img src='osc-logo.svg' className='w-14' />
        </a>
        <div className='hidden md:flex flex-row items-center'>
          {['Learn', 'Events', 'Members', 'About Us'].map((e) => (
            <NavbarLink sectionText={e} key={e} />
          ))}
        </div>
        <a
          href='https://chat.whatsapp.com/EEbQCxj23qE5vQx7Z9abAI'
          target='_blank'
          rel='noopener noreferrer'
          className='px-4 py-0 text-[14px] text-gray-200 rounded-[8px] bg-purple-950 leading-7 ml-16 shadow-[inset_0_0_5px_rgba(255,255,255,0.6)] hidden md:block'
        >
          Join us
        </a>
        <button
          className='md:hidden ml-auto text-gray-200'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden bg-[#020103] flex flex-col items-center py-4 px-5 mt-4 border-gray-800 border rounded-xl w-full'>
          {['Learn', 'Events', 'Members', 'About Us'].map((e) => (
            <NavbarLink sectionText={e} key={e} />
          ))}
          <button className='px-4 py-0 text-[14px] text-gray-200 rounded-[8px] bg-purple-950 leading-7 mt-4 shadow-[inset_0_0_5px_rgba(255,255,255,0.6)]'>
            Join us
          </button>
        </div>
      )}
    </div>
  )
}
