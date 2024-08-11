'use client'

import { About } from './_sections/about'
import { Competitions } from './_sections/competitions'
import { Education } from './_sections/education'
import { Landing } from './_sections/landing'
import { Projects } from './_sections/projects'

export default function Home() {
  return (
    <div className='bg'>
      <Landing />
      {/* <About />
        <Projects />
        <Competitions />
        <Education /> */}
    </div>
  )
}
