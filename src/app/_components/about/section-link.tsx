export const SectionLink = ({
  onClick,
  title,
  description,
}: {
  onClick: (e: any) => void
  title: string
  description: string
}) => {
  return (
    <button
      onClick={onClick}
      className='z-[2] glass group rounded-lg border border-transparent px-4 pt-4 pb-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      rel='noopener noreferrer'
    >
      <h2 className='mb-4 text-xl font-semibold gradient-text text-left'>
        {title}{' '}
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
          &rarr;
        </span>
      </h2>
      <p className='m-0 max-w-[34ch] text-[13px] leading-5 opacity-50 text-left'>
        {description}
      </p>
    </button>
  )
}
