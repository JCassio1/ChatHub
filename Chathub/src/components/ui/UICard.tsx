const UICard = () => {
  return (
    <div className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl'>
      <a className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8' href=''>
        <div className='h-80 w-60'>
          <h3 className='text-lg font-bold text-gray-900 sm:text-xl'>Science of Chats</h3>

          <p className='mt-2 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </a>
    </div>
  )
}

export default UICard
