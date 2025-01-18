import { toKebabCase } from '../_utils/to-kebab-case'

export const NavbarLink = ({ sectionText }: { sectionText: string }) => {
  return (
    <a
      href={`#${toKebabCase(sectionText)}`}
      className='px-4 text-[14px] text-gray-200 hover:underline'
    >
      {sectionText}
    </a>
  )
}
