import React from 'react'

interface TodoFormContainerProps {
  text: string
  children: React.ReactNode
}

const TodoFormContainer = (props: TodoFormContainerProps) => {
  return (
    <>
      <div
        id="add-todo"
        className="flex gap-2 flex-col w-full pt-4 px-8 pb-2 bg-gray-100 shadow-sm border-b-2 border-gray-200"
      >
        <div className="flex grow font-semibold text-lg">{props.text}</div>
        {props.children}
      </div>
    </>
  )
}

export default TodoFormContainer
