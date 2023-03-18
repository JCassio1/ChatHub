const MidSection = () => {
  return (
    <section className='bg-gray-900 py-40'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:flex-row-reverse lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full'>
            <img
              alt='Party'
              src='https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>

          <div className='lg:py-24'>
            <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
              Keep people you love within arm's length.
            </h1>

            <p className='mt-4 text-white'>
              Connecting with loved ones has never been more important, and our chat application makes it easier than
              ever to stay in touch. Whether you're across the room or across the world, our platform allows you to keep
              those you care about within arm's length.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidSection
