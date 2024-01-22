import React from 'react'

interface TodoFormContainerProps {
  children: React.ReactNode
}

const TodoFormContainer = (props: TodoFormContainerProps) => {
  return (
    <>
      <div
        id="add-todo"
        className="flex w-full flex-col gap-2 border-b-2 border-gray-200 bg-gray-100 px-8 pb-2 pt-4 shadow-sm"
      >
        {props.children}
      </div>
    </>
  )
}

export default TodoFormContainer
