import UICard from '../../../components/ui/UICard'

const CardSection = () => {
  return (
    <div className='flex items-center justify-center' style={{ zIndex: '0' }}>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center overflow-hidden cursor-pointer'>
          <UICard cardTitle='Write' cardSubheading='Prepare the moments to share.' />
          <UICard cardTitle='Preview' cardSubheading='Include every tiny detail of the story' />
          <UICard cardTitle='Send' cardSubheading='Share with friends or family.' />
        </div>
      </div>
    </div>
  )
}

export default CardSection
