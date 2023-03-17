import UICard from '../../../components/ui/UICard'

const CardSection = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center overflow-hidden cursor-pointer'>
          <UICard />
          <UICard />
          <UICard />
        </div>
      </div>
    </div>
  )
}

export default CardSection
