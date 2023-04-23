import { UIModalProps } from '../../Model/data-structures'

const UIModal = ({ isOpen, onClose, title, body, buttonText, isButtonDisabled, handleModalClick }: UIModalProps) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
          <div className='relative w-auto max-w-md mx-auto my-6'>
            <div className='fixed inset-0 bg-gray-500 opacity-75 transition-opacity' onClick={handleClose}></div>

            <div className='relative bg-white w-full rounded-lg shadow-lg'>
              <div className='p-5 text-center border-b border-gray-300'>
                <h3 className='text-xl font-bold leading-tight text-gray-900'>{title}</h3>
              </div>
              <div className='p-5'>{body}</div>

              <div className='flex justify-center items-center px-5 py-3 border-t jus border-gray-300'>
                <button
                  disabled={isButtonDisabled}
                  className={`px-4 py-2 font-semibold text-white ${
                    isButtonDisabled ? 'bg-gray-300' : 'bg-indigo-600'
                  } rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-600`}
                  onClick={handleModalClick}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UIModal
