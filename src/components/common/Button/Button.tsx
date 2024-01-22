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
          'bg-blue-700 hover:bg-[#2e7b80] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500',
          disabled && 'cursor-not-allowed bg-gray-500',
          'transition duration-700 ease-in-out',
          'text-sm font-medium text-white',
          '-mb-2 flex h-8 items-center justify-center rounded-md px-4 py-2'
        )}
        type={type}
      >
        {text}
      </button>
    </>
  )
}

export default Button
