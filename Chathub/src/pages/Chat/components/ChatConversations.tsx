import { useEffect, useRef, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db, auth } from '../../../config/firebase'
import SendTextBubble from './SendTextBubble'
import ReceiveTextBubble from './ReceiveTextBubble'
import { snapshotMessageProps, textMessagesProps } from '../../../Model/data-structures'

const ChatConversations = ({ room }) => {
  const messageInputRef = useRef<HTMLInputElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

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

      // scroll to the bottom of the messages container
      messagesContainerRef.current?.scrollTo({
        top: messagesContainerRef.current?.scrollHeight,
        behavior: 'smooth'
      })
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
      <div className='flex-1 max-h-[calc(100%-100px)] overflow-y-scroll' ref={messagesContainerRef}>
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
      <div ref={messagesContainerRef}></div> {/* added a dummy div for auto-scrolling */}
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
    </div>
  )
}

export default ChatConversations
