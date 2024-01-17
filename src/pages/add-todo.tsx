import React from 'react'
import { useRouter } from 'next/router'
import { Button, TodoForm } from '@/components'

const AddTodo = () => {
  const router = useRouter()

  const handleNagivateBack = () => {
    router.push('/')
  }

  return (
    <>
      <Button
        text="Go Back"
        type="button"
        disabled={false}
        onclick={handleNagivateBack}
      />
      <TodoForm />
    </>
  )
}

export default AddTodo
