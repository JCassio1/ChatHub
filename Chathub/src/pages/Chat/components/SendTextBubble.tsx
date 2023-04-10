import { textBubbleProps } from '../../../Model/data-structures'

const SendTextBubble = ({ message = '' }: textBubbleProps) => {
  return (
    <div className='flex justify-end mb-2'>
      <span className='bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded-full max-w-md'>{message}</span>
    </div>
  )
}

export default SendTextBubble
