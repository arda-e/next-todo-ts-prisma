import React, { MouseEventHandler } from 'react'
import { classNames } from '@/utils/helpers'

interface ButtonProps {
  text: string
  disabled: boolean
  type: 'button' | 'submit' | 'reset'
  onclick?: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const { text, disabled, type, onclick } = props

  return (
    <>
      <button
        onClick={onclick}
        disabled={disabled}
        className={classNames(
          'bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-[#2e7b80] focus:outline-none',
          disabled && 'bg-gray-500 cursor-not-allowed',
          'transition ease-in-out duration-700',
          'text-white font-medium text-sm',
          'flex items-center justify-center h-8 py-2 px-4 rounded-md -mb-2'
        )}
        type={type}
      >
        {text}
      </button>
    </>
  )
}

export default Button
