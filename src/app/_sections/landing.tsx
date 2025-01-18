'use client'

import {
  FaLinkedin,
  FaChevronDown,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import { SectionLink } from '../_components/about/section-link'

export const Landing = () => {
  const scrollToView = (id: string) => (e: any) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
    window.history.pushState(null, '', `#${id}`)
  }
  return (
    <section
      id='landing'
      className='flex min-h-screen flex-col items-center justify-between w-full relative'
      // className='flex min-h-screen flex-col items-center justify-between w-screen relative pt-2'
    >
      {/* <div className='flex flex-row w-screen mt-[42px]'> */}
      <div className='flex flex-row w-full mt-[180px]'>
        {/* <div className='flex flex-row w-screen pt-16'> */}
        <div className='flex-1' />
        <div className='flex-[8] flex flex-col justify-content items-center max-w-[480px]'>
          {/* <div className='flex-[8] flex flex-col justify-content items-center max-w-[480px] mt-[42px]'> */}
          <img src='osc-landing.svg' className='w-full pb-6' />
          <p className='md:text-[22px] text-gray-400 font-light text-left ml-2 w-full leading-8'>
            Open-source is about empowering programmers, building community, and
            increasing reliability.
          </p>
          <div className='flex flex-row space-x-4 mt-4'>
            <svg width='1em' height='1em'>
              <linearGradient
                id='instagram-gradient'
                x1='100%'
                y1='100%'
                x2='0%'
                y2='0%'
              >
                <stop stopColor='#f09433' offset='0%' />
                <stop stopColor='#bc1888' offset='100%' />
              </linearGradient>
              <linearGradient
                id='whatsapp-gradient'
                x1='100%'
                y1='100%'
                x2='0%'
                y2='0%'
              >
                <stop stopColor='#25D366' offset='0%' />
                <stop stopColor='#128C7E' offset='100%' />
              </linearGradient>
              <linearGradient
                id='linkedin-gradient'
                x1='100%'
                y1='100%'
                x2='0%'
                y2='0%'
              >
                <stop stopColor='#0077B5' offset='0%' />
                <stop stopColor='#005582' offset='100%' />
              </linearGradient>
            </svg>
            <a
              href='https://www.instagram.com/aus.osc/'
              target='_blank'
              rel='noopener noreferrer'
              className='z-10'
            >
              <FaInstagram
                size={24}
                style={{ fill: 'url(#instagram-gradient)' }}
              />
            </a>
            <a
              href='https://chat.whatsapp.com/EEbQCxj23qE5vQx7Z9abAI'
              target='_blank'
              rel='noopener noreferrer'
              className='z-10'
            >
              <FaWhatsapp
                size={24}
                style={{ fill: 'url(#whatsapp-gradient)' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/company/opensourceclub'
              target='_blank'
              rel='noopener noreferrer'
              className='z-10'
            >
              <FaLinkedin
                size={24}
                style={{ fill: 'url(#linkedin-gradient)' }}
              />
            </a>
          </div>
        </div>
        <div className='flex-[4]'></div>
      </div>
      <div className='mb-0 grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 text-left mt-8 lg:px-32'>
        <SectionLink
          onClick={scrollToView('learn')}
          title={'Learn'}
          description={
            'Learn about how to use open-source software and use powerful libraries.'
          }
        />
        <SectionLink
          onClick={scrollToView('events')}
          title={'Events'}
          description={
            'Discover past events from previous semesters held by the Open-Source Club.'
          }
        />
        <SectionLink
          onClick={scrollToView('members')}
          title={'Members'}
          description={
            'View the Open-Source Club core team and our registered members.'
          }
        />
        <SectionLink
          onClick={scrollToView('about-us')}
          title={'About Us'}
          description={
            'Find information regarding our club, our mission, and our contact details.'
          }
        />
      </div>
      <div className='absolute bg-contain bg-no-repeat w-[640px] h-full right-28 bg-purple-composition -z-30 mt-[40px]'></div>
      <div className='absolute h-full w-full bg-gradient-radial -z-50'></div>
      <div className='absolute h-full w-full bg-gradient-black bg-cover -z-10'></div>
      <div className='absolute h-full w-full bg-stars bg-cover -z-0'></div>
      <div className='absolute h-full w-full bg-pattern bg-cover -z-40'></div>
      {/* <div className='h-screen w-screen absolute landing-bg -z-10'>
        <div className='h-full w-full bg-gradient-to-r from-black'></div> */}
      {/* </div> */}

      <div className='relative w-full mt-0 mb-8 flex flex-col items-center'>
        <FaChevronDown size={16} />
      </div>
    </section>
  )
}
