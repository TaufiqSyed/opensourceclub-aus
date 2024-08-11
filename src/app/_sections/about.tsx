import { FaChevronDown } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export const About = () => {
  return (
    <section id='about' className='w-full h-full relative flex-wrap'>
      <div className='w-full h-full flex flex-row flex-wrap'>
        <div className='flex-1 lg:flex-none' />
        <div className='sm:w-full max-w-[320px] flex flex-col text-slate-100 bg-zinc-800/30 border-neutral-800 border rounded-xl py-8 px-6 m-10 items-center'>
          <div className='w-60 h-60 rounded-full bg-slate-900 mb-4' />
          <p className='gradient-text font-extrabold text-xl mb-2 uppercase'>
            {/* <p className='gradient-text font-medium text-2xl mb-2'> */}
            Taufiq Syed
          </p>
          <div className='flex flex-row items-center text-xl mb-6'>
            <MdLocationOn />
            <p className='font-light text-xl ml-2'>Dubai, UAE</p>
          </div>
          <div className='flex flex-row mt-3 items-start w-full text-start'>
            <div className='size-14 rounded-full bg-slate-700 mb-4' />
            <div className='flex flex-col pl-2 items-start'>
              <p className='font-bold text-sm leading-tight'>
                Bachelor of Computer Science
              </p>
              <p className='font-normal text-sm leading-tight'>
                American University of Sharjah
              </p>
              <p className='font-normal text-sm leading-tight'>
                Graduating Apr 2025
              </p>
            </div>
          </div>
          <div className='flex flex-row mt-3 items-start w-full'>
            <div className='size-14 rounded-full bg-slate-700 mb-4' />
            <div className='flex flex-col pl-2 items-start'>
              <p className='font-bold text-sm leading-tight'>President</p>
              <p className='font-normal text-sm leading-tight'>
                Open Source Club @ AUS
              </p>
              <p className='font-normal text-sm leading-tight'>
                Sep 2023 - Present
              </p>
            </div>
          </div>
          <div className='flex flex-row mt-3 items-start w-full text-start'>
            <div className='size-14 rounded-full bg-slate-700 mb-4' />
            <div className='flex flex-col pl-2 items-start'>
              <p className='font-bold text-sm leading-tight'>
                Research Assistant
              </p>
              <p className='font-normal text-sm leading-tight'>
                American University of Sharjah
              </p>
              <p className='font-normal text-sm leading-tight'>
                Large Language Models
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1 lg:flex-none' />
        <div className='flex-grow lg:flex-1 sm-w-full h-full flex flex-col justify-start items-start py-14 px-20'>
          <p className='font-bold gradient-text uppercase text-md tracking-wide bg-slate-100'>
            {/* <p className='font-bold text-lg gradient-text'> */}
            About Me
          </p>
          <div className='w-full pt-5 pb-5 px-7 rounded-2xl mt-2 mb-8 bg-zinc-800/30 border-neutral-800 border'>
            <p className='text-wrap w-full text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <p className='font-bold gradient-text uppercase text-md tracking-wide bg-slate-100'>
            Skills
          </p>
          <div className='flex flex-wrap pt-0 pb-7 rounded-2xl mt-2'>
            {[
              'hello',
              'there',
              'how',
              'are',
              'you',
              'doing',
              'right',
              'now',
              '2hello',
              '2there',
              '2how',
              '2are',
              '2you',
              '2doing',
              '2right',
              '2now',
              '3hello',
              '3there',
              '3how',
              '3are',
              '3you',
            ].map((e) => (
              <div
                key={e}
                className='me-2 my-1 px-3 py-1.5 rounded-lg bg-black/20 border border-slate-800'
              >
                <span key={e} className='text-slate-100 text-md'>
                  {e}
                </span>
              </div>
            ))}

            {/* <p className='text-wrap w-full text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p> */}
          </div>
          <p className='font-bold gradient-text uppercase text-md tracking-wide bg-slate-100'>
            {/* <p className='font-bold text-lg gradient-text'> */}
            Experience
          </p>
          <div className='mb-8 w-full py-2 px-7 rounded-2xl mt-2 bg-zinc-800/30 border-neutral-800 border'>
            <div className='flex flex-row mt-3 items-start w-full text-start'>
              <div className='size-14 rounded-full bg-slate-700 mb-4' />
              <div className='flex flex-col pl-2 items-start'>
                <p className='font-bold text-sm leading-tight'>
                  Software Engineering Intern
                </p>
                <p className='font-normal text-sm leading-tight'>ILMUX Ltd.</p>
                <p className='font-normal text-sm leading-tight'>2022-2022</p>
              </div>
            </div>
          </div>
          <p className='font-bold gradient-text uppercase text-md tracking-wide bg-slate-100'>
            {/* <p className='font-bold text-lg gradient-text'> */}
            Tech Stack
          </p>
          <div className='flex flex-row mt-3 items-start w-full text-start flex-wrap'>
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
            <div className='size-16 rounded-3xl mr-4 bg-black/20 border border-slate-800' />
          </div>
        </div>
      </div>
      <div className='absolute w-full bottom-12 flex flex-col items-center'>
        <FaChevronDown size={16} />
      </div>
    </section>
  )
}
