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
        className="group cursor-pointer flex border-2 min-h-24 h-20 bg-white p-4 border-gray-200 transition duration-300 ease-in-out hover:border-blue-600 hover:bg-blue-50 rounded-md shadow-sm"
      >
        <div id="todo-item-content" className="flex flex-col gap w-full">
          <div
            id="todo-item-name"
            className="font-medium text-lg group-hover:text-blue-700"
          >
            {props.name}
          </div>
          {props.description ? (
            <div
              id="todo-item-description"
              className="text-sm font-normal group-hover:text-blue-700"
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
