import AppleLogo from '../../../assets/apple-256.png'
import Meta from '../../../assets/meta.png'
import Amazon from '../../../assets/amazon.png'

const BrandsSection = () => {
  return (
    <section>
      <div className='bg-red-800 py-8'>
        <div className='container mx-auto flex flex-wrap justify-around items-center'>
          <img className='h-16 mr-6 mb-4' src={AppleLogo} alt='Apple' />
          <img className='h-16 mr-6 mb-4' src={Meta} alt='Meta' />
          <img className='h-16 mr-6 mb-4' src={Amazon} alt='Amazon' />
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
