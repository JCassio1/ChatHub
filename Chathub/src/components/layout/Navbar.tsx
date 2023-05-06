import { Link as LinkScroll } from 'react-scroll'
import { MenuItems } from '../../Model/data-structures'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const menuItemsArray: MenuItems[] = [{ title: 'Features', domLocation: 'featureSection' }]

  const MenuItemMap: JSX.Element[] = menuItemsArray.map((item: MenuItems, index: number) => (
    <li key={index}>
      <LinkScroll
        className='text-gray-500 transition hover:text-gray-500/75'
        to={item.domLocation}
        smooth={true}
        duration={500}
      >
        {item.title}
      </LinkScroll>
    </li>
  ))

  return (
    <header aria-label='Site Header' className='bg-gray-900'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <Link className='block text-white text-xl' to='/'>
          <span className='sr-only'>Home</span>
          <h1 className='font-bold'>ChatHub.</h1>
        </Link>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Site Nav' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>{MenuItemMap}</ul>
          </nav>

          <div className='flex items-center gap-4 '>
            <div className='flex items-center gap-4 sm:flex-1 justify-center sm:justify-end'>
              <Link to='/auth?mode=login'>
                <div className='block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:text-white transition hover:bg-blue-600 sm:text-base sm:py-3 sm:px-6'>
                  Login
                </div>
              </Link>

              <Link to='/auth?mode=signup'>
                <div className='block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition sm:text-base sm:py-3 sm:px-6'>
                  Sign up
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
