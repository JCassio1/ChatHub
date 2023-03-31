const ChatConversations = () => {
  return (
    <div className='flex-1 h-full bg-white p-4'>
      <div className='flex items-center mb-4'>
        <h2 className='text-lg font-bold text-gray-900'>The fellas 💪🏾🔥</h2>
      </div>
      <div className='flex-1 overflow-y-scroll'>
        <div className='mb-4'>
          <div className='flex justify-end'>
            <span className='bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded-full max-w-md'>Hey there!</span>
          </div>
          <div className='flex justify-start items-center mb-4'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://i.pravatar.cc/300?img=1'
              alt='User Avatar'
            />
            <span className='bg-indigo-600 text-white text-sm px-2 py-1 rounded-full max-w-md flex-shrink-0'>
              Hi! How are you?
            </span>
          </div>
        </div>
        <div className='mb-4'>
          <div className='flex justify-end'>
            <span className='bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded-full max-w-md'>
              I'm good, thanks. How about you?
            </span>
          </div>
          <div className='flex justify-start items-center flex-shrink-0'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://i.pravatar.cc/300?img=1'
              alt='User Avatar'
            />
            <span className='bg-indigo-600 text-white text-sm py-1 px-2 rounded-full max-w-md'>
              I'm doing pretty well, thanks for asking!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatConversations
