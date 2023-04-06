const LoadingScreen = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75'>
      <div className='flex items-center justify-center'>
        <div className='inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900' />
        <span className='ml-3 text-white text-xl font-bold'>Loading...</span>
      </div>
    </div>
  )
}

export default LoadingScreen
