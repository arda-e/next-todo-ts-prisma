import React from 'react'
import { useFormContext } from 'react-hook-form'
import { classNames } from '@/utils/helpers'

interface InputProps {
  label: string
  name: string
  placeholder: string
}

const Input = ({ label, name, placeholder }: InputProps) => {
  const { register, formState } = useFormContext()
  const inputError = formState.errors[name]?.message?.toString()

  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-semibold mb-1"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={classNames(
            'bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500',
            'text-gray-900 text-sm',
            'rounded-lg block w-full p-1.5'
          )}
          id={name}
          type="text"
          placeholder={placeholder}
          {...register(name)}
        />
        {inputError ? (
          <p className="text-red-500 text-xs pt-2">{inputError}</p>
        ) : null}
      </div>
    </>
  )
}

export default Input
