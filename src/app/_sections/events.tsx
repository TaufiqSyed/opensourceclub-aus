import React from 'react'

export const Events = () => {
  return (
    <section
      id='events'
      className='learnSection gradient-bottom-left text-start justify-start relative items-start flex flex-col w-full h-full pt-20 px-4'
    >
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full'>
        Events
      </p>
      <div className='flex justify-center w-full'>
        <div className='responsive-iframe-container max-w-lg w-full'>
          <iframe
            src='https://instagram.com/aus.osc/embed'
            frameBorder='0'
            scrolling='no'
            allowTransparency={true}
            className='responsive-iframe'
          ></iframe>
        </div>
      </div>
    </section>
  )
}
