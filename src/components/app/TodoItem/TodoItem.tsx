import React from 'react'

interface TodoItemProps {
  name: string
  description: string | null
  createdAt: Date
  updatedAt: Date
  // handleDeleteTodo: () => void
  handleEditTodo: () => void
}

const TodoItem = (props: TodoItemProps) => {
  const handleTodoItemEdit = () => {
    props.handleEditTodo()
  }

  // const handleTodoItemDelete = () => {
  //   props.handleDeleteTodo()
  // }

  return (
    <>
      <div
        id="todo-item"
        onClick={handleTodoItemEdit}
        className="group cursor-pointer flex border-2 bg-white p-4 border-gray-200 transition duration-300 ease-in-out hover:border-blue-600 hover:bg-blue-50 rounded-md shadow-sm"
      >
        <div id="todo-item-name" className="">
          {props.name}
        </div>
        {props.description ? (
          <div id="todo-item-description" className="">
            {props.description}
          </div>
        ) : null}
        <div id="todo-item-actions" className="">
          {/* <button id="todo-item-edit" className="" onClick={handleTodoItemEdit}>
            Edit
          </button>
          <button
            id="todo-item-delete"
            className=""
            onClick={handleTodoItemDelete}
          >
            Delete
          </button> */}
        </div>
        {/* <div id="todo-time">
          <div id="todo-item-created-at" className="">
            {props.createdAt.toString()}
          </div>
          <div id="todo-item-updated-at" className="">
            {props.updatedAt.toString()}
          </div>
        </div> */}
      </div>
    </>
  )
}

export default TodoItem
