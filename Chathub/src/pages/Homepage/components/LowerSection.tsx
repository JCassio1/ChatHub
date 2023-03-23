import { Link } from 'react-router-dom'
import bartSimpson from '../../../assets/bartSimpson.png'

const LowerSection = () => {
  return (
    <section className='bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
            <img alt='Party' src={bartSimpson} className='absolute inset-0 h-full w-full object-cover' />
          </div>

          <div className='lg:py-24'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl'>
              Join the ChatHub <span className='text-red-500 animate-pulse font-display'>Cult</span>
            </h2>

            <p className='mt-4 text-gray-400'>
              Simple, reliable, private messagingfor free, available all over the world.
            </p>

            <Link
              to='/'
              className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Join Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LowerSection
