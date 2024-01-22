import React from 'react'

interface TodoItemProps {
  name: string
  description: string | null
  createdAt: Date
  updatedAt: Date
  handleEditTodo: () => void
}

const TodoItem = (props: TodoItemProps) => {
  const handleTodoItemEdit = () => {
    props.handleEditTodo()
  }

  return (
    <>
      <div
        id="todo-item"
        onClick={handleTodoItemEdit}
        className="group flex h-20 min-h-24 cursor-pointer rounded-md border-2 border-gray-200 bg-white p-4 shadow-sm transition duration-300 ease-in-out hover:border-blue-600 hover:bg-blue-50"
      >
        <div id="todo-item-content" className="gap flex w-full flex-col">
          <div
            id="todo-item-name"
            className="text-lg font-medium text-gray-800 group-hover:text-blue-700"
          >
            {props.name}
          </div>
          {props.description ? (
            <div
              id="todo-item-description"
              className="text-sm font-normal text-gray-800 group-hover:text-blue-700"
            >
              {props.description}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default TodoItem
