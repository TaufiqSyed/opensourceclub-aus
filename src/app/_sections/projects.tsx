import { FaChevronDown } from 'react-icons/fa'

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex flex-col justify-start items-center relative px-4'
    >
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide bg-slate-100 pt-20 pb-6'>
        Projects
      </p>
      <div className='grid grid-cols-4 w-full h-full'>
        {['hello', 'there', 'how', 'are', 'you', 'doing', 'right', 'now'].map(
          (e) => (
            <div
              key={e}
              className='flex flex-col items-start text-slate-100 bg-zinc-800/30 border-neutral-800 border rounded-xl pt-6 pb-2 px-6 m-4'
            >
              <div className='flex bg-slate-600 w-full h-32' />
              <p className='extrabold text-sm pt-2'>Cool Project</p>
              <div className='flex flex-row flex-wrap pt-0 pb-0 rounded-2xl mt-2 justify-start'>
                {['hello', 'there', 'how', 'are', 'you'].map((e) => (
                  <div
                    key={e}
                    className='text-sm me-1 my-1 px-2 py-1 rounded-lg bg-black/20 border border-slate-800'
                  >
                    <span key={e} className='text-slate-100 text-md'>
                      {e}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div className='absolute w-full bottom-10 flex flex-col items-center'>
        <FaChevronDown size={16} />
      </div>
    </section>
  )
}
