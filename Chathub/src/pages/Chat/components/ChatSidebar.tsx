const ChatSidebar = () => {
  return (
    <div className='flex-3 h-full bg-gray-100 p-4'>
      <h2 className='text-lg font-bold mb-4'>Contacts</h2>
      <ul className='list-none p-0'>
        <li className='mb-2 cursor-pointer'>
          <div className='flex items-center'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Samantha'
              alt='avatar'
            />
            <div>
              <h3 className='text-gray-900 font-bold'>Hubchat</h3>
              <p className='text-gray-600'>Hey there, how are you?</p>
            </div>
          </div>
        </li>
        <li className='mb-2 cursor-pointer'>
          <div className='flex items-center'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Bella'
              alt='avatar'
            />
            <div>
              <h3 className='text-gray-900 font-bold'>The fellas</h3>
              <p className='text-gray-600'>What are you up to this weekend?</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ChatSidebar
