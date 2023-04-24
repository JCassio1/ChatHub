import { useState } from 'react'
import ChatComponent from './components/ChatComponent'
import ChatSidebar from './components/ChatSidebar'

const ChatRoom = () => {
  const [chatRoom, setChatRoom] = useState<string | null>(null)

  const handleSelectedChat = (chatId: string) => {
    if (chatId.trim().length === 0) return
    setChatRoom(chatId)
  }

  return (
    <section>
      <div className='flex flex-row h-screen'>
        <ChatSidebar handleChatClick={(chatId) => handleSelectedChat(chatId)} />
        <ChatComponent roomId={chatRoom} />
      </div>
    </section>
  )
}

export default ChatRoom
