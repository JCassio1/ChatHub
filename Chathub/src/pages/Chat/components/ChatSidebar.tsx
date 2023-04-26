import { useEffect, useRef, useState } from 'react'
import UIModal from '../../../components/ui/UIModal'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, updateDoc } from 'firebase/firestore'
import { db, auth } from '../../../config/firebase'
import { v4 as uuidv4 } from 'uuid'
import { generateFourDigitPin, generateSixDigitCode, getRandomAvatarUrl } from '../../../utils/helpers'
import { useAuth } from '../../../hooks/AuthContext'
import { chatsProps, sideBarProps } from '../../../Model/data-structures'
import ChatSidebarItem from './ChatSidebarItem'

const ChatSidebar = ({ handleChatClick }: sideBarProps) => {
  const { currentUser } = useAuth()

  const [chats, setChats] = useState<chatsProps[]>([])

  const [showModal, setShowModal] = useState(false)
  const [showNewGroupModal, setShowNewGroupModal] = useState(false)
  const [insertedCode, setInsertedCode] = useState('')
  const [insertedReference, setInsertedReference] = useState('')
  const [insertedGroupName, setInsertedGroupName] = useState('')

  const chatsRef = collection(db, 'Chats')

  const isChatsEmpty = !chats || chats.length === 0

  const isJoinButtonDisabled = insertedReference === '' || insertedCode === ''

  const isCreateButtonDisabled = insertedGroupName === ''

  const handleChatSelection = (chatId: string) => {
    handleChatClick(chatId)
  }

  const userChats = isChatsEmpty ? (
    <p>No chats. Join or create a new one</p>
  ) : (
    chats.map((chat) => (
      <ChatSidebarItem
        key={chat.id}
        chatId={chat.id}
        chatName={chat.chatName}
        lastMessage='Change me'
        chatAvatarUrl={chat.chatImageUrl}
        clickHandler={handleChatSelection}
      />
    ))
  )

  useEffect(() => {
    const queryChats = query(chatsRef, where('members', 'array-contains', currentUser?.uid), orderBy('createdAt'))
    const unsubscribe = onSnapshot(queryChats, (snapshot) => {
      let chats: chatsProps[] = []

      snapshot.forEach((doc) => {
        chats.push({
          ...doc.data()
        })
      })

      setChats(chats)
    })

    return () => unsubscribe()
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
        console.error('No matches found!')
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
        console.error(error)
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
    <div className='flex-3 h-full bg-gray-100 p-4'>
      <UIModal
        isOpen={showModal}
        title={'Chatroom code'}
        onClose={() => setShowModal((prev) => !prev)}
        isButtonDisabled={isJoinButtonDisabled}
        body={
          <div>
            <input className='pb-3' type='text' placeholder='Reference number' onChange={handleReferenceInput} /> <hr />{' '}
            <input className='pt-3' type='text' placeholder='Pin code' onChange={handlePincodeInput} />
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
  )
}

export default ChatSidebar
