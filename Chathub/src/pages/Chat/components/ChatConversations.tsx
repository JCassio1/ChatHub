import { useEffect, useRef, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db, auth } from '../../../config/firebase'
import SendTextBubble from './SendTextBubble'
import ReceiveTextBubble from './ReceiveTextBubble'
import { ChatConversationsProps, snapshotMessageProps, textMessagesProps } from '../../../Model/data-structures'

const ChatConversations = ({ roomData, chatId, chatname }: ChatConversationsProps) => {
  const messageInputRef = useRef<HTMLInputElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const messagesRef = collection(db, 'Messages')
  const [isMessageEmpty, setIsMessageEmpty] = useState(true)

  const handleInputValidity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMessageEmpty(!event.target.value || event.target.value.trim() === '')
  }

  const handleMessageSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    if (isMessageEmpty) return

    await addDoc(messagesRef, {
      text: messageInputRef.current?.value,
      createdAt: serverTimestamp(),
      user: auth?.currentUser?.uid,
      avatarUrl: auth?.currentUser?.photoURL,
      userDisplayName: auth?.currentUser?.displayName,
      room: chatId
    })

    messageInputRef.current!.value = ''
    setIsMessageEmpty(true)
  }

  const messagebody =
    roomData && roomData.length === 0 ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ textAlign: 'center' }}>No chat selected</p>
      </div>
    ) : (
      <div className='flex'>
        <form className='flex items-center mt-4 px-0 mx-0 flex-grow'>
          <input
            className='flex-grow rounded-full py-2 px-4 border-gray-400 border mr-4'
            type='text'
            placeholder='Type your message here...'
            ref={messageInputRef}
            onChange={handleInputValidity}
          />
          <button
            onClick={handleMessageSubmit}
            disabled={isMessageEmpty}
            className={`${isMessageEmpty ? 'bg-gray-700' : 'bg-indigo-600'} text-white rounded-full py-2 px-4 ${
              !isMessageEmpty && 'hover:bg-indigo-800'
            } transition-colors`}
          >
            Send
          </button>
        </form>
      </div>
    )

  return (
    <div className='flex-1 h-full bg-white p-4'>
      <div className='flex items-center mb-4'>
        <h2 className='text-lg font-bold text-gray-900'>{chatname}</h2>
      </div>
      <div className='flex-1 max-h-[calc(100%-100px)] overflow-y-scroll' ref={messagesContainerRef}>
        {roomData.map((message: textMessagesProps, index) => {
          if (message.user === auth?.currentUser?.uid) {
            return <SendTextBubble key={index} message={message.text} />
          } else {
            return (
              <ReceiveTextBubble
                key={index}
                message={message.text}
                avatarUrl={message?.avatarUrl}
                senderName={message?.userDisplayName}
              />
            )
          }
        })}
      </div>

      {messagebody}
    </div>
  )
}

export default ChatConversations
