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
      <div className='bottom-2 fixed z-10'>
        <form className='flex items-center mt-4 px-0 mx-0'>
          <input
            className='flex-1 rounded-full py-2 px-4 border-gray-400 border mr-4 w-full'
            type='text'
            placeholder='Type your message here...'
          />
          <button className='bg-indigo-600 text-white rounded-full py-2 px-4 hover:bg-blue-500 transition-colors'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatConversations
