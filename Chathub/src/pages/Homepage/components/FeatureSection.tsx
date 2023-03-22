import FeatureItem from './FeatureItem'

const FeatureSection = () => {
  return (
    <section>
      <div className='bg-gray-100'>
        <div className='max-w-sm lg:max-w-2xl xl:max-w-5xl py-12 px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          <FeatureItem
            itemText='Free Forever. Pay for additional features'
            viewBox='0 0 512 512'
            itemColor='bg-blue-600'
            svgColor='white'
            svgPath='M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z'
          />
          <FeatureItem
            itemText='State of the art encryption'
            viewBox='0 0 24 24'
            itemColor='bg-rose-600'
            svgColor='white'
            svgPath='M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z'
          />
          <FeatureItem
            itemText='Acess everywhere at anytime '
            viewBox='0 0 1024 1024'
            itemColor='bg-purple-600'
            svgColor='white'
            svgPath='M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z'
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
