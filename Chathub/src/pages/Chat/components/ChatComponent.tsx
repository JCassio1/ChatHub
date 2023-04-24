import ChatConversations from './ChatConversations'
import { useEffect, useRef, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { chatComponentProps, snapshotMessageProps } from '../../../Model/data-structures'

const ChatComponent = ({ roomId }: chatComponentProps) => {
  const messagesRef = collection(db, 'Messages')
  const [messages, setMessages] = useState<snapshotMessageProps[]>([])

  useEffect(() => {
    if (roomId == null) return
    const queryMessages = query(messagesRef, where('room', '==', roomId), orderBy('createdAt'))
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: snapshotMessageProps[] = []
      snapshot.forEach((doc) => {
        const messageSnapshot: snapshotMessageProps = {
          room: doc.data().room,
          avatarUrl: doc.data().avatarUrl,
          text: doc.data().text,
          user: doc.data().user,
          userDisplayName: doc.data().userDisplayName,
          createdAt: doc.data().createdAt
        }

        messages.push({
          ...messageSnapshot,
          id: doc.id
        })
      })
      setMessages(messages)

      //   scroll to the bottom of the messages container
      //   messagesContainerRef.current?.scrollTo({
      //     top: messagesContainerRef.current?.scrollHeight,
      //     behavior: 'smooth'
      //   })
    })

    return () => unsubscribe()
  }, [roomId])

  return <ChatConversations roomData={messages} chatId={roomId} />
}

export default ChatComponent
