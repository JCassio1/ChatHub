import { Link } from 'react-router-dom'
import CardSection from './CardSection'

const HeroSection = () => {
  return (
    <section className='bg-gray-900 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            Connect with Friends and Family.
            <span className='sm:block'> Anytime, Anywhere. </span>
          </h1>

          <p
            className='mx-auto text-gray-400 mt-4 max-w-xl sm:text-xl sm:leading-relaxed'
            style={{ marginTop: '45px', marginBottom: '45px' }}
          >
            ChatHub is the perfect app for simplifying your communication and staying connected with the people who
            matter most.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
              to='/auth'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <CardSection />
    </section>
  )
}

export default HeroSection
