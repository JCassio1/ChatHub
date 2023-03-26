import { UITextFieldType } from '../../Model/data-structures'

const UITextField = ({ labelTitle, fieldType, fieldPlaceholder, handleOnChange, svgElement }: UITextFieldType) => {
  return (
    <div>
      <label className='sr-only'>{labelTitle}</label>

      <div className='relative'>
        <input
          type={fieldType}
          className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
          placeholder={fieldPlaceholder}
          onChange={handleOnChange}
        />

        <span className='absolute inset-y-0 right-0 grid place-content-center px-4'>{svgElement}</span>
      </div>
    </div>
  )
}

export default UITextField
