const Navbar = () => {
  interface MenuItems {
    title: string
    titleLink: string
  }

  const menuItemsArray: MenuItems[] = [
    { title: 'Secrets', titleLink: '/' },
    { title: 'Features', titleLink: '/' }
  ]

  const MenuItemMap: JSX.Element[] = menuItemsArray.map((item: MenuItems, index: number) => (
    <li key={index}>
      <a className='text-gray-500 transition hover:text-gray-500/75' href={item.titleLink}>
        {item.title}
      </a>
    </li>
  ))

  return (
    <header aria-label='Site Header' className='bg-gray-900'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <a className='block text-white text-xl' href='/'>
          <span className='sr-only'>Home</span>
          <h1 className='font-bold'>ChatHub.</h1>
        </a>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Site Nav' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>{MenuItemMap}</ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <a
                className='block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:text-white transition hover:bg-blue-600'
                href='/'
              >
                Login
              </a>

              <a href='#' className='rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white'>
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
