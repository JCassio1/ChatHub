import { useEffect, useRef, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db, auth } from '../../../config/firebase'
import SendTextBubble from './SendTextBubble'
import ReceiveTextBubble from './ReceiveTextBubble'
import { snapshotMessageProps, textMessagesProps } from '../../../Model/data-structures'

const ChatConversations = ({ room }) => {
  const messageInputRef = useRef<HTMLInputElement>(null)

  const [messages, setMessages] = useState<snapshotMessageProps[]>([])

  const messagesRef = collection(db, 'Messages')

  const [isMessageEmpty, setIsMessageEmpty] = useState(true)

  useEffect(() => {
    const queryMessages = query(messagesRef, where('room', '==', 'Gobby'), orderBy('createdAt'))
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: snapshotMessageProps[] = []
      snapshot.forEach((doc) => {
        messages.push({
          ...doc.data(),
          id: doc.id
        })
      })
      setMessages(messages)
    })

    return () => unsubscribe()
  }, [])

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
      room: 'Gobby'
    })

    messageInputRef.current!.value = ''
    setIsMessageEmpty(true)
  }

  return (
    <div className='flex-1 h-full bg-white p-4'>
      <div className='flex items-center mb-4'>
        <h2 className='text-lg font-bold text-gray-900'>The fellas 💪🏾🔥</h2>
      </div>
      <div className='flex-1 overflow-y-scroll'>
        {messages.map((message: textMessagesProps, index) => {
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
      <div className='bottom-2 fixed z-10'>
        <form className='flex items-center mt-4 px-0 mx-0'>
          <input
            className='flex-1 rounded-full py-2 px-4 border-gray-400 border mr-4 w-full'
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
    </div>
  )
}

export default ChatConversations
