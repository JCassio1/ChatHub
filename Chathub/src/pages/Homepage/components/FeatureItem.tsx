interface featureItem {
  itemColor: string
  itemText: string
  svgPath: string
  svgColor: string
  viewBox: string
  textColor: string
}

const FeatureItem = ({ itemColor, itemText, svgPath, svgColor, viewBox, textColor }: featureItem) => {
  return (
    <div
      className={`${itemColor} p-8 rounded-xl h-full flex flex-col justify-around group-hover:bg-opacity-10 transition duration-500`}
    >
      <svg
        className='h-8 w-8 lg:h-12 lg:w-12 mb-4'
        viewBox={viewBox}
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path fill={svgColor} d={svgPath} />
      </svg>
      <div>
        <p className={`mt-4 text-xl xl:text-2xl font-semibold ${textColor} leading-6`}>{itemText}</p>
      </div>
    </div>
  )
}

export default FeatureItem
