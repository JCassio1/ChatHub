import ChatConversations from './ChatConversations'
import { useEffect, useRef, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { chatComponentProps, snapshotMessageProps } from '../../../Model/data-structures'

const ChatComponent = ({ roomId }: chatComponentProps) => {
  const messagesRef = collection(db, 'Messages')
  const chatsRef = collection(db, 'Chats')
  const [messages, setMessages] = useState<snapshotMessageProps[]>([])
  const [chatName, setChatName] = useState<string | null>(null)

  useEffect(() => {
    if (roomId == null) return
    const queryMessages = query(messagesRef, where('room', '==', roomId), orderBy('createdAt'))
    const queryChatName = query(chatsRef, where('id', '==', roomId))

    const chatnameUnsubscribe = onSnapshot(queryChatName, (snapshot) => {
      snapshot.forEach((doc) => {
        setChatName(doc.data().chatName)
      })
    })

    // Fetch chat messages
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
    })

    return () => {
      unsubscribe(), chatnameUnsubscribe()
    }
  }, [roomId])

  return <ChatConversations roomData={messages} chatId={roomId} chatname={chatName} />
}

export default ChatComponent
