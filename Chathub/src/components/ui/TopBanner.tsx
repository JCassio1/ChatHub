import { banner } from '../../Model/data-structures'

const TopBanner = ({ bannerText }: banner) => {
  return (
    <div className='bg-indigo-600 px-4 py-3 text-white'>
      <p className='text-center text-sm font-medium'>{bannerText}</p>
    </div>
  )
}

export default TopBanner
