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
      <div className="flex flex-col gap-4 mt-8 w-3/4 mx-auto">
        <div id="add-todo-action-container" className="flex justify-start">
          <Button
            text="Go Back"
            type="button"
            disabled={false}
            onclick={handleNagivateBack}
          />
        </div>
        <TodoForm />
      </div>
    </>
  )
}

export default AddTodo
