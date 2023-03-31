import ChatConversations from './components/ChatConversations'
import ChatSidebar from './components/ChatSidebar'

const ChatRoom = () => {
  return (
    <section>
      <div className='flex flex-row h-screen'>
        <ChatSidebar />
        <ChatConversations />
      </div>
    </section>
  )
}

export default ChatRoom
