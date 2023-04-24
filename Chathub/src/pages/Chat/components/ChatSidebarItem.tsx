import { sidebarChatProps } from '../../../Model/data-structures'

const ChatSidebarItem = ({ chatName, lastMessage, chatAvatarUrl, clickHandler, chatId }: sidebarChatProps) => {
  return (
    <li className='mb-2 cursor-pointer hover:bg-slate-300' onClick={() => clickHandler(chatId)}>
      <div className='flex items-center'>
        <img className='h-10 w-10 rounded-full object-cover mr-2' src={chatAvatarUrl} alt='avatar' />
        <div>
          <h3 className='text-gray-900 font-bold'>{chatName}</h3>
          <p className='text-gray-600'>{lastMessage}</p>
        </div>
      </div>
    </li>
  )
}

export default ChatSidebarItem
