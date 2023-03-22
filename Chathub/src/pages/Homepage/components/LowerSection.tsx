import bartSimpson from '../../../assets/bartSimpson.png'

const LowerSection = () => {
  return (
    <section className='bg-purple-600'>
      <div className='mx-auto max-w-screen-xl px-4 pt-6 pb-20 lg:flex lg:items-center'>
        <div className='mx-auto max-w-3xl text-center'>
          <img
            alt='Lava'
            src={bartSimpson}
            className='h-57 w-full rounded-xl object-cover transition group-hover:grayscale-[50%]'
          />
        </div>
      </div>
    </section>
  )
}

export default LowerSection
