import { useRef, useState } from 'react'
import UIModal from '../../../components/ui/UIModal'

const ChatSidebar = () => {
  const [showModal, setShowModal] = useState(false)
  const [showNewGroupModal, setShowNewGroupModal] = useState(false)
  const insertedCode = useRef(null)
  const insertedGroupName = useRef(null)

  const handleCodeInput = (event) => {
    insertedCode.current = event.target.value
  }

  const handleChatNameInput = (event) => {
    insertedGroupName.current = event.target.value
  }

  const handleModalClick = () => {
    console.log('Add user to chat')
  }

  const handleChatCreation = () => {
    console.log('Create new chat code')
  }

  return (
    <div className='flex-3 h-full bg-gray-100 p-4'>
      <UIModal
        isOpen={showModal}
        title={'Chatroom code'}
        onClose={() => setShowModal((prev) => !prev)}
        body={<input type='text' placeholder='Enter code' onChange={handleCodeInput} />}
        buttonText={'Join Chat'}
        handleModalClick={handleModalClick}
      />

      <UIModal
        isOpen={showNewGroupModal}
        title={'New chat'}
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
      <ul className='list-none p-0'>
        <li className='mb-2 cursor-pointer'>
          <div className='flex items-center'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Samantha'
              alt='avatar'
            />
            <div>
              <h3 className='text-gray-900 font-bold'>Hubchat</h3>
              <p className='text-gray-600'>Hey there, how are you?</p>
            </div>
          </div>
        </li>
        <li className='mb-2 cursor-pointer'>
          <div className='flex items-center'>
            <img
              className='h-10 w-10 rounded-full object-cover mr-2'
              src='https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Bella'
              alt='avatar'
            />
            <div>
              <h3 className='text-gray-900 font-bold'>The fellas 💪🏾🔥</h3>
              <p className='text-gray-600'>What are you up to this weekend?</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ChatSidebar
