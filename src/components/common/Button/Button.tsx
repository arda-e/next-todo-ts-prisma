import { classNames } from '@/utils/helpers'
import React from 'react'

interface ButtonProps {
  text: string
  disabled: boolean
  type: 'submit' | 'reset' | 'button'
}

const Button = (props: ButtonProps) => {
  const { text, disabled, type } = props
  return (
    <>
      <button
        disabled={disabled}
        className={classNames(
          'bg-blue-700 transition ease-in-out duration-700 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-[#2e7b80] text-white font-bold focus:outline-none flex place-content-center',
          'mt-2 h-10 self-end w-1/4 py-2 px-4 rounded'
        )}
        type={type}
      >
        {text}
      </button>
    </>
  )
}

export default Button
