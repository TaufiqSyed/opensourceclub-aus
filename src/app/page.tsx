'use client'

import { About } from './_sections/about'
import { Learn } from './_sections/learn'
import { Events } from './_sections/events'
import { Landing } from './_sections/landing'
import { Members } from './_sections/members'

export default function Home() {
  return (
    <div className='bg'>
      <Landing />
      <Learn />
      <Events />
      <Members />
      <About />
    </div>
  )
}
