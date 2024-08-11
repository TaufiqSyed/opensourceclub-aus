import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'

export const Socials = () => (
  <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
    <a
      className='fixed  text-md left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-4 md:pb-6 md:pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'
      href='/Taufiq Syed Resume.pdf'
      target='_blank'
    >
      <MdDownload size={20} className='mr-2' />
      <p>Download my resume here</p>
      <code className='font-mono font-bold'></code>
    </a>
    <div className='flex h-10 md:h-24 w-full items-center justify-center from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none text-2xl md:text-4xl'>
      <a
        className='pointer-events-auto flex place-items-center gap-2 p-0 md:p-8 lg:p-0'
        href='https://www.linkedin.com/in/taufiq-syed-82b124159/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin />
      </a>
      <div className='w-4' />
      <a
        className='pointer-events-auto flex place-items-center gap-2 p-0 md:p-8 lg:p-0'
        href='https://github.com/TaufiqSyed'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  </div>
)
