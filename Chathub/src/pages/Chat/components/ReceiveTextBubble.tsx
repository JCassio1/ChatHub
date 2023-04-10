import { receiveTextBubbleProps } from '../../../Model/data-structures'

const ReceiveTextBubble = ({ message, avatarUrl, senderName }: receiveTextBubbleProps) => {
  return (
    <div className='flex flex-col items-start mb-4'>
      <p className='text-gray-500 text-xs mb-1'>{senderName}</p>
      <div className='flex items-center'>
        <img className='h-10 w-10 rounded-full object-cover mr-2' src={avatarUrl} alt='User Avatar' />
        <span className='bg-indigo-600 text-white text-sm px-2 py-1 rounded-full max-w-md flex-shrink-0'>
          {message}
        </span>
      </div>
    </div>
  )
}

export default ReceiveTextBubble
