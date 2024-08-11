import { NavbarLink } from './navbar-link'

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-center mt-2'>
      <div className='flex flex-row items-center py-4 px-5 border-gray-800 border rounded-xl'>
        <a href='/'>
          <img src='osc-logo.svg' className='w-14 mr-16' />
        </a>
        {['Learn', 'Events', 'Members', 'About Us'].map((e) => (
          <NavbarLink sectionText={e} key={e} />
        ))}
        <button className='px-4 py-0 text-[14px] text-gray-200 rounded-[8px] bg-purple-950 leading-7 ml-16 shadow-[inset_0_0_5px_rgba(255,255,255,0.6)]'>
          Join us
        </button>
      </div>
    </div>
  )
}
