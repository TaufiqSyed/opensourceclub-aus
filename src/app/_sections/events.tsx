// export const Events = () => {
//   return (
//     <section id='events'>
//       <div className='flex flex-row w-full'>
//         {/* bg-zinc-800/30 border
//       border-neutral-800 */}
//         {/* bg-slate-900/30
//         border-2
//         border-slate-900 */}
//         <div
//           className='flex flex-col text-slate-100 py-8 px-6 mx-10

//         bg-black/10 border-slate-900
//         bg-slate-900/50
//         border
//         shadow-xl
//         shadow-black-900
//         rounded-xl items-center'
//         >
//           {/* <div className='flex flex-col text-slate-100 bg-zinc-800/30 border-neutral-800 border py-8 px-6 mx-10 rounded-xl items-center'> */}
//           <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide bg-slate-100 pb-4'>
//             EVENTS
//           </p>
//           <div className='h-40 w-[600px] bg-slate-800 mb-4' />
//           <div className='w-full flex flex-row justify-start pl-2 mt-8'>
//             <p className='gradient-text font-extrabold text-lg uppercase'>
//               {/* <p className='gradient-text font-medium text-2xl mb-2'> */}
//               Courses
//             </p>
//           </div>
//           {/* <div className='flex flex-row items-center text-xl mb-6'></div> */}
//           <div className='grid grid-cols-5'>
//             {[
//               'Data Structures & Algorithms',
//               'Design & Analysis of Algorithms',
//               'Data Mining',
//               'Graphic User Interface',
//               'Graphic User Interface',
//               'Graphic User Interface',
//               'Graphic User Interface',
//               'Graphic User Interface',
//               'Graphic User Interface',
//               'Graphic User Interface',
//             ].map((e) => (
//               <div className='bg-black/15 rounded-3xl size-24 flex flex-col items-center justify-center mx-5 my-3 text-xl p-2'>
//                 <p className='text-xs'>{e}</p>
//               </div>
//             ))}
//           </div>
//           {/* <div className='flex flex-row mt-3 items-start w-full text-start'>
//             <div className='flex flex-col pl-2 items-start'>
//               <p className='font-bold text-sm leading-tight'>
//                 Bachelor of Computer Science
//               </p>
//               <p className='font-normal text-sm leading-tight'>
//                 American University of Sharjah
//               </p>
//               <p className='font-normal text-sm leading-tight'>
//                 Graduating Apr 2025
//               </p>
//             </div>
//           </div> */}
//         </div>
//         <div className='min-w-[550px] h-[400px] pl-32 mt-16'>
//           {/* bg-zinc-800/30 border-neutral-800 */}
//           {/* bg-zinc-800/30 border-neutral-800 */}

//           <div
//             className='flex flex-col w-full h-full text-slate-100
//            bg-black/10 border-slate-800 border-2
//            rounded-xl border-none pt-6 pb-8 px-4 m-10 items-start'
//           >
//             <p className='gradient-text font-extrabold text-lg uppercase mb-8 text-start'>
//               {/* <p className='gradient-text font-medium text-2xl mb-2'> */}
//               Certifications
//             </p>
//             <div className='flex flex-row w-full items-center justify-between'>
//               <div className='flex flex-row mt-3 items-start w-full'>
//                 <div className='size-14 rounded-full bg-slate-700 mb-4' />
//                 <div className='flex flex-col pl-2 items-start'>
//                   <p className='font-bold text-sm leading-tight'>
//                     Deep Learning Specialization
//                   </p>
//                   <p className='font-normal text-sm leading-tight'>Coursera</p>
//                   <p className='font-normal text-sm leading-tight'>
//                     ConvNets&nbsp;&#8226; &nbsp;Sequence Models&nbsp;&#8226;
//                     &nbsp;NLP
//                   </p>
//                 </div>
//               </div>
//               <div className='size-8 bg-slate-700' />
//             </div>

//             <div className='flex flex-row w-full items-center justify-between'>
//               <div className='flex flex-row mt-3 items-start w-full'>
//                 <div className='size-14 rounded-full bg-slate-700 mb-4' />
//                 <div className='flex flex-col pl-2 items-start'>
//                   <p className='font-bold text-sm leading-tight'>
//                     M001: MongoDB Basics
//                   </p>
//                   <p className='font-normal text-sm leading-tight'>
//                     MongoDB University
//                   </p>
//                   <p className='font-normal text-sm leading-tight'>
//                     NoSQL&nbsp;&nbsp;&#8226; &nbsp;Data Modelling
//                   </p>
//                 </div>
//               </div>
//               <div className='size-8 bg-slate-700' />
//             </div>
//             <div className='flex flex-row w-full items-center justify-between'>
//               <div className='flex flex-row mt-3 items-start w-full text-start'>
//                 <div className='size-14 rounded-full bg-slate-700 mb-4' />
//                 <div className='flex flex-col pl-2 items-start'>
//                   <p className='font-bold text-sm leading-tight'>
//                     Intro To Cybersecurity
//                   </p>
//                   <p className='  font-normal text-sm leading-tight'>Cisco</p>
//                   <p className='font-normal text-sm leading-tight'>
//                     Networking &nbsp;&#8226; &nbsp;Hardware&nbsp;&#8226; &nbsp;
//                     Vulnerabilities
//                   </p>
//                 </div>
//               </div>
//               <div className='size-8 bg-slate-700' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
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
