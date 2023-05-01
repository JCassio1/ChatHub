import { useEffect, useRef, useState } from 'react'
import UIModal from '../../../components/ui/UIModal'
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  updateDoc,
  limitToLast,
  getDocs
} from 'firebase/firestore'
import { db, auth } from '../../../config/firebase'
import { v4 as uuidv4 } from 'uuid'
import { generateFourDigitPin, generateSixDigitCode, getRandomAvatarUrl } from '../../../utils/helpers'
import { useAuth } from '../../../hooks/AuthContext'
import { chatsProps, sideBarProps } from '../../../Model/data-structures'
import ChatSidebarItem from './ChatSidebarItem'
import toast, { Toaster } from 'react-hot-toast'

const ChatSidebar = ({ handleChatClick }: sideBarProps) => {
  const { currentUser } = useAuth()

  const [chats, setChats] = useState<chatsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [saidHello, setSaidHello] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [showNewGroupModal, setShowNewGroupModal] = useState(false)
  const [insertedCode, setInsertedCode] = useState('')
  const [insertedReference, setInsertedReference] = useState('')
  const [insertedGroupName, setInsertedGroupName] = useState('')

  const chatsRef = collection(db, 'Chats')
  const messagesRef = collection(db, 'Messages')

  const isChatsEmpty = chats.length === 0

  const isJoinButtonDisabled = insertedReference === '' || insertedCode === ''

  const isCreateButtonDisabled = insertedGroupName === ''

  const handleChatSelection = (chatId: string) => {
    handleChatClick(chatId)
  }

  const userChats = isChatsEmpty ? (
    isLoading ? (
      <p>Loading....</p>
    ) : (
      <p>No chats. Join or create a new one</p>
    )
  ) : (
    chats.map((chat) => (
      <ChatSidebarItem
        key={chat.id}
        chatId={chat.id}
        chatName={chat.chatName}
        lastMessage={chat.lastSentMessage}
        chatAvatarUrl={chat.chatImageUrl}
        clickHandler={handleChatSelection}
        chatRef={chat.chatReference}
        chatPin={chat.chatPincode}
      />
    ))
  )

  useEffect(() => {
    const queryChats = query(chatsRef, where('members', 'array-contains', currentUser?.uid), orderBy('createdAt'))
    const chatUnsubscribeFns: (() => void)[] = []

    const unsubscribe = onSnapshot(queryChats, async (snapshot) => {
      const chats: chatsProps[] = []

      if (!saidHello) {
        toast(`Hello ${currentUser ? currentUser?.displayName : 'You!'} 👋`)
        setSaidHello(true)
      }

      for (const doc of snapshot.docs) {
        const chatIdToSearch = doc.data().id
        const queryLastMessage = query(
          messagesRef,
          where('room', '==', chatIdToSearch),
          orderBy('createdAt'),
          limitToLast(1)
        )

        try {
          const searchSnapshot = await getDocs(queryLastMessage)
          let lastMessage = null

          searchSnapshot.forEach((doc) => {
            lastMessage = doc.data().text
          })

          chats.push({
            chatImageUrl: doc.data().chatImageUrl,
            chatName: doc.data().chatName,
            chatPincode: doc.data().chatPincode,
            createdAt: doc.data().createdAt,
            id: doc.data().id,
            members: doc.data().members,
            lastSentMessage: lastMessage,
            chatReference: doc.data().chatReference
          })
        } catch (error) {
          toast.error('Error fetching messages. Please try again later.')
        }
      }

      setChats(chats)
      setIsLoading(false)
    })

    return () => {
      chatUnsubscribeFns.forEach((unsubscribeFn) => unsubscribeFn())
      unsubscribe()
    }
  }, [])

  const handlePincodeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertedCode(event.target.value)
  }

  const handleReferenceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertedReference(event.target.value)
  }

  const handleChatNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertedGroupName(event.target.value)
  }

  const handleJoiningChat = () => {
    const queryChats = query(
      chatsRef,
      where('chatReference', '==', insertedReference),
      where('chatPincode', '==', insertedCode)
    )

    const unsubscribe = onSnapshot(queryChats, (snapshot) => {
      if (snapshot.empty) {
        toast.error('Unable to join group. It no longer exists or the credentials are incorrect')
        return
      }

      const doc = snapshot.docs[0]
      const chatRef = doc.ref
      const oldMembers = doc.data().members || []
      const isUserAlreadyMember = oldMembers.includes(currentUser?.uid)

      if (isUserAlreadyMember) {
        return
      }

      const newMembers = [...oldMembers, currentUser?.uid]

      updateDoc(chatRef, { members: newMembers }).catch((error) => {
        toast.error('Unable to join group. Please try again later.')
      })

      unsubscribe()
    })

    setInsertedReference('')
    setInsertedCode('')
    setShowModal(false)
  }

  const handleChatCreation = async () => {
    if (isCreateButtonDisabled) return

    await addDoc(chatsRef, {
      id: uuidv4(),
      createdAt: serverTimestamp(),
      chatName: insertedGroupName,
      chatImageUrl: getRandomAvatarUrl(),
      chatReference: generateSixDigitCode(),
      chatPincode: generateFourDigitPin(),
      members: [currentUser?.uid]
    })

    setShowNewGroupModal(false)
    setInsertedGroupName('')
  }

  return (
    <>
      <Toaster />
      <div className='flex-3 h-full bg-gray-100 p-4'>
        <UIModal
          isOpen={showModal}
          title={'Chatroom code'}
          onClose={() => setShowModal((prev) => !prev)}
          isButtonDisabled={isJoinButtonDisabled}
          body={
            <div>
              <input className='pb-3' type='text' placeholder='Reference number' onChange={handleReferenceInput} />{' '}
              <hr /> <input className='pt-3' type='text' placeholder='Pin code' onChange={handlePincodeInput} />
            </div>
          }
          buttonText={'Join Chat'}
          handleModalClick={handleJoiningChat}
        />

        <UIModal
          isOpen={showNewGroupModal}
          title={'New chat'}
          isButtonDisabled={isCreateButtonDisabled}
          onClose={() => setShowNewGroupModal((prev) => !prev)}
          body={<input type='text' placeholder='Enter chat name' onChange={handleChatNameInput} />}
          buttonText={'Create chat'}
          handleModalClick={handleChatCreation}
        />

        <div className='flex justify-center'>
          <button
            type='button'
            className='text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2'
            onClick={() => setShowModal((prev) => !prev)}
          >
            + Join Chat
          </button>
          <button
            type='button'
            className='text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2'
            onClick={() => setShowNewGroupModal((prev) => !prev)}
          >
            + Create Group
          </button>
        </div>
        <h2 className='text-lg font-bold mb-4'>Chats</h2>
        <div style={{ height: 'calc(100% - 136px)', overflowY: 'scroll' }}>
          <ul className='list-none p-0'>{userChats}</ul>
        </div>
      </div>
    </>
  )
}

export default ChatSidebar
