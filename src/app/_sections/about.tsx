import React from 'react'
import { FaChalkboardTeacher, FaUsers, FaTools } from 'react-icons/fa'

const cardData = [
  {
    icon: <FaChalkboardTeacher className='text-white w-6 h-6' />,
    title: 'Workshops & Events',
    description:
      'Interactive sessions on topics like Node.js, Git, Blender, Linux, and more to build practical skills.',
  },
  {
    icon: <FaUsers className='text-white w-6 h-6' />,
    title: 'Community Building',
    description:
      'Collaborate with peers, share knowledge, and grow together in a supportive environment.',
  },
  {
    icon: <FaTools className='text-white w-6 h-6' />,
    title: 'Development Tools',
    description:
      'Learn to use the latest tools and technologies to enhance your development workflow.',
  },
]

export const About = () => {
  return (
    <section
      id='about-us'
      className='learnSection gradient-bottom-right text-start justify-start relative items-start flex flex-col w-full min-h-full pt-20 pb-10 px-4'
    >
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full'>
        About Us
      </p>
      <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full h-full flex flex-col items-center'>
          <div className='flex flex-col md:flex-row items-center justify-center w-full'>
            <img
              src='osc-landing.svg'
              alt='OSC Landing'
              className='w-2/3 md:w-1/3 mb-6 md:mb-0 md:mr-6 p-10 pb-20'
            />

            <div className='shadow-md rounded-lg p-6 max-w-2xl border border-gray-700 glass-gray mb-6'>
              <p className='text-lg mb-4 text-center mt-4'>
                <span className='text-2xl font-semibold'>
                  The Open Source Club
                </span>{' '}
                @ the American University of Sharjah is a community for students
                passionate about open-source software. We provide resources,
                interactive workshops, and networking opportunities.
              </p>
              <p className='text-lg mb-8 text-center'>
                Join us to explore new technologies, grow your expertise, and
                make an impact in the global open-source community.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-8'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='glass-gray shadow-lg rounded-lg p-6 max-w-sm'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4'>
                {card.icon}
              </div>
              <h2 className='text-2xl font-semibold text-white mb-4'>
                {card.title}
              </h2>
              <p className='text-gray-400'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
