import AppleLogo from '../../../assets/apple-256.png'
import Meta from '../../../assets/meta.png'
import Twitch from '../../../assets/twitch.png'
import SurveyMonkey from '../../../assets/surveymonkey.png'

const BrandsSection = () => {
  return (
    <section>
      <div className='bg-red-800 py-5' style={{ background: 'linear-gradient(to right, #48bb78, #4299e1, #be185d)' }}>
        <div className='container mx-auto flex flex-wrap justify-around items-center'>
          <img className='h-10 mr-6 mb-4' src={AppleLogo} alt='Apple' />
          <img className='h-10 mr-6 mb-4' src={Meta} alt='Meta' />
          <img className='h-10 mr-6 mb-4' src={Twitch} alt='Twitch' />
          <img className='h-10 mr-6 mb-4' src={SurveyMonkey} alt='Survey Monkey' />
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
