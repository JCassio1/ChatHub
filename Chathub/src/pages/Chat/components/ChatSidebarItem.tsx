import { Popover } from '@headlessui/react'
import { sidebarChatProps } from '../../../Model/data-structures'

const ChatSidebarItem = ({
  chatName,
  lastMessage,
  chatAvatarUrl,
  clickHandler,
  chatRef,
  chatPin,
  chatId
}: sidebarChatProps) => {
  return (
    <li className='mb-2 cursor-pointer hover:bg-slate-300' onClick={() => clickHandler(chatId)}>
      <div className='flex items-center'>
        <img className='h-10 w-10 rounded-full object-cover mr-2' src={chatAvatarUrl} alt='avatar' />
        <div>
          <h3 className='text-gray-900 font-bold'>{chatName}</h3>
          <p className='text-gray-600'>{lastMessage}</p>
        </div>
        <Popover className='ml-auto'>
          <Popover.Button className='p-1 rounded-full hover:bg-gray-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className='z-10 absolute w-64 max-w-xs px-4 py-2 bg-white border rounded-lg shadow-lg'>
            <p>Chat reference: {chatRef}</p>
            <p>Chat pin: {chatPin}</p>
          </Popover.Panel>
        </Popover>
      </div>
    </li>
  )
}

export default ChatSidebarItem
