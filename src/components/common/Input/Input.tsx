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
          className="mb-1 block text-sm font-semibold text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={classNames(
            'border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500',
            'text-sm text-gray-900',
            'block w-full rounded-lg p-1.5'
          )}
          id={name}
          type="text"
          placeholder={placeholder}
          {...register(name)}
        />
        {inputError ? (
          <p className="pt-2 text-xs text-red-500">{inputError}</p>
        ) : null}
      </div>
    </>
  )
}

export default Input
