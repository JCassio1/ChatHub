import UICard from '../../../components/ui/UICard'

const CardSection = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center overflow-hidden cursor-pointer'>
          <UICard cardTitle='Write' cardSubheading='Share intimate and funny moments with friends or family.' />
          <UICard cardTitle='Preview' cardSubheading='View before you send.' />
          <UICard cardTitle='Send' cardSubheading='Sending to everyone you know.' />
        </div>
      </div>
    </div>
  )
}

export default CardSection
