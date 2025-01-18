'use client'

import { FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa'
import { Socials } from '../_components/about/socials'
import { SectionLink } from '../_components/about/section-link'

export const Landing = () => {
  const scrollToView = (id: string) => (e: any) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
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
        </div>
        <div className='flex-[4]'></div>
      </div>
      <div className='mb-0 grid lg:mb-0 lg:w-full lg:px-32 grid-cols-4 text-left mt-8'>
        {/* <div className='mt-8 md:mt-0 mb-0 grid text-center lg:mb-0 lg:w-full lg:max-w-screen-lg lg:grid-cols-4 lg:text-left'> */}
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
