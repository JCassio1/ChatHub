interface CardProps {
  cardTitle: string
  cardSubheading: string
}

const UICard = ({ cardTitle, cardSubheading }: CardProps): JSX.Element => {
  return (
    <div className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl'>
      <div className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8'>
        <div className='h-80 w-60'>
          <div className='relative flex mb-3 h-32 w-full justify-center rounded-xl bg-cover'>
            <img
              src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png'
              className='absolute flex h-32 w-full justify-center rounded-xl bg-cover'
            />
          </div>
          <span className='whitespace-nowrap mt-20 rounded-full bg-purple-100 px-2.5 text-base text-purple-700'>
            {cardTitle}
          </span>

          <p className='mt-4 text-xl font-normal text-neutral-900'>{cardSubheading}</p>
        </div>
      </div>
    </div>
  )
}

export default UICard
