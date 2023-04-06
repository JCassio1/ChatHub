import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext'

const AuthenticatedNavbar = () => {
  const { logoutWithFirebase } = useAuth()
  return (
    <header aria-label='Site Header' className='bg-gray-900'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <Link className='block text-white text-xl' to='/'>
          <span className='sr-only'>Home</span>
          <h1 className='font-bold'>ChatHub.</h1>
        </Link>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <div className='flex items-center gap-6 text-sm' />
          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <div className='block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white'>
                <Link to='/view/messages'>App</Link>
              </div>
            </div>
            <div className='sm:flex sm:gap-4'>
              <div
                onClick={logoutWithFirebase}
                className='block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:text-white transition hover:bg-blue-600'
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AuthenticatedNavbar
