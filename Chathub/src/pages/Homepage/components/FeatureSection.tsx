import FeatureItem from './FeatureItem'

const FeatureSection = () => {
  return (
    <section id='featureSection'>
      <div className='bg-gray-100'>
        <div className='max-w-sm lg:max-w-2xl xl:max-w-5xl py-12 px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          <FeatureItem
            itemText='Free forever. Pay for additional features'
            viewBox='0 0 512 512'
            itemColor='bg-blue-600'
            svgColor='white'
            textColor='text-white'
            svgPath='M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z'
            additionalClasses='drop-shadow-md'
          />
          <FeatureItem
            itemText='State of the art encryption'
            viewBox='0 0 24 24'
            itemColor='bg-rose-600'
            svgColor='white'
            textColor='text-white'
            svgPath='M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z'
            additionalClasses='drop-shadow-md'
          />
          <FeatureItem
            itemText='Access everywhere at anytime '
            viewBox='0 0 1024 1024'
            itemColor='bg-purple-600'
            svgColor='white'
            textColor='text-white'
            additionalClasses='drop-shadow-md'
            svgPath='M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z'
          />
          <FeatureItem
            itemText='Everything erased within 24 hours'
            viewBox='0 0 16 16'
            itemColor='bg-neutral-900'
            textColor='text-white'
            additionalClasses='drop-shadow-md'
            svgColor='white'
            svgPath='M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zm3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 01-2.335 2.348 7.326 7.326 0 01-7.889 0A7.615 7.615 0 011.721 8a7.594 7.594 0 012.52-2.462 4 4 0 107.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 018 6.5z'
          />
          <FeatureItem
            itemText='Your data and only yours'
            viewBox='0 0 512 512'
            itemColor='bg-yellow-500'
            textColor='text-black'
            svgColor='black'
            additionalClasses='drop-shadow-md'
            svgPath='M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0071.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0071.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64zm161.47 233.93a309.18 309.18 0 01-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613.12 613.12 0 0085.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72'
          />
          <FeatureItem
            itemText='Always kept up to date'
            viewBox='0 0 512 512'
            itemColor='bg-green-600'
            textColor='text-white'
            svgColor='white'
            additionalClasses='drop-shadow-md'
            svgPath='M280.16 242.79l-26.11-26.12a32 32 0 00-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.11 32.11 0 009.21 23.94l39 39.43a.46.46 0 00.07.07A32.29 32.29 0 0087 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 00.11-45.34zM490 190l-.31-.31-34.27-33.92a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68a119.92 119.92 0 00-14.18 16.22 16 16 0 0018.65 24.34 74.45 74.45 0 018.58-2.63 63.46 63.46 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.18 3.82-7.72 18.14-20 34.48a16 16 0 001.45 21l34.41 34.41a16 16 0 0022 .62c9.73-8.69 24.55-21.79 29.73-25 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l34.26 33.91a21.45 21.45 0 0015.28 6.25 21.7 21.7 0 0015.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 00490 190z'
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
