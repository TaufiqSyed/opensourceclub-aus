import {
  FaGithub,
  FaReact,
  FaPython,
  FaGitAlt,
  FaCodeBranch,
} from 'react-icons/fa'
import { SiFlutter, SiHuggingface } from 'react-icons/si'

const links = [
  {
    href: 'https://code.visualstudio.com/',
    icon: <FaGithub className='w-12 h-12' />,
    title: 'Install VSCode',
    description: 'Get started with Visual Studio Code, a powerful code editor.',
  },
  {
    href: 'https://learngitbranching.js.org/',
    icon: <FaCodeBranch className='w-12 h-12' />,
    title: 'Learn Git Branching',
    description: 'Interactive way to learn Git branching.',
  },
  {
    href: 'https://scrimba.com/learn/learnreact',
    icon: <FaReact className='w-12 h-12' />,
    title: 'Interactive React Tutorial',
    description: 'Comprehensive React tutorial by Bob Ziroll on Scrimba.',
  },
  {
    href: 'https://huggingface.co/learn',
    icon: <SiHuggingface className='w-12 h-12' />,
    title: 'Learn Huggingface',
    description: 'Learn about Huggingface and its powerful NLP tools.',
  },
  {
    href: 'https://scikit-learn.org/stable/',
    icon: <FaPython className='w-12 h-12' />,
    title: 'Scikit-learn Tutorial',
    description: 'Tutorials for Scikit-learn, an ML library for Python.',
  },
  {
    href: 'https://flutter.dev/docs/get-started/learn-more',
    icon: <SiFlutter className='w-12 h-12' />,
    title: 'Learn Flutter',
    description: 'Learn how to build cross-platform apps with Flutter.',
  },
]

export const Learn = () => {
  return (
    <section
      id='learn'
      className='learnSection gradient-top-right text-start justify-start relative items-start flex flex-col w-full min-h-full pt-20 px-4'
    >
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide pb-4 pt-6 text-center w-full'>
        Learn
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className='flex flex-col items-center p-6 border border-gray-600 rounded-lg shadow-lg glass-gray  text-white  transition duration-300 h-56'
            // className='flex flex-col items-center p-6 border border-gray-600 rounded-lg shadow-lg glass-gray  text-white hover:bg-gray-900 transition duration-300 h-56'
            // bg-gray-900
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex items-center justify-center w-20 h-20 bg-purple-950 rounded-full'>
              {link.icon}
            </div>
            <span className='mt-4 text-xl font-semibold'>{link.title}</span>
            <p className='mt-2 text-center'>{link.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
