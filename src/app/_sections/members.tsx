import { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

interface Member {
  name: string
  position: string
}

export const Members = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [colors, setColors] = useState<string[]>([])

  const getRandomDarkColor = () => {
    const r = Math.floor(Math.random() * 150)
    const g = Math.floor(Math.random() * 150)
    const b = Math.floor(Math.random() * 150)
    return `rgb(${r}, ${g}, ${b})`
  }

  useEffect(() => {
    fetch('/members.json')
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.members)
        setColors(data.members.map(() => getRandomDarkColor()))
      })
      .catch((error) => console.error('Error fetching members:', error))
  }, [])

  return (
    <section
      id='members'
      className='learnSection gradient-top-left flex flex-col items-center justify-center w-full h-full pt-10 px-4'
    >
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide pb-8 pt-6 text-center w-full'>
        Members
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full'>
        {members.map((member, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className='flex items-center justify-center w-24 h-24 rounded-full mb-4'
              style={{ backgroundColor: colors[index] }}
            >
              <FaUserCircle className='w-16 h-16 text-white' />
            </div>
            <span className='text-lg font-semibold'>{member.name}</span>
            <span className='text-sm text-purple-400'>{member.position}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
