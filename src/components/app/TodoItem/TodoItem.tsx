import React from 'react'

interface TodoItemProps {
  name: string
  description: string | null
  createdAt: Date
  updatedAt: Date
  handleDeleteTodo: () => void
}

const TodoItem = (props: TodoItemProps) => {
  const handleTodoItemDelete = () => {
    props.handleDeleteTodo()
  }
  return (
    <>
      <div id="todo-item" className="">
        <div id="todo-item-name" className="">
          {props.name}
        </div>
        {props.description ? (
          <div id="todo-item-description" className="">
            {props.description}
          </div>
        ) : null}
        <div id="todo-item-actions" className="">
          <button id="todo-item-edit" className="">
            Edit
          </button>
          <button
            id="todo-item-delete"
            className=""
            onClick={handleTodoItemDelete}
          >
            Delete
          </button>
        </div>
        <div id="todo-time">
          <div id="todo-item-created-at" className="">
            {props.createdAt.toString()}
          </div>
          <div id="todo-item-updated-at" className="">
            {props.updatedAt.toString()}
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoItem
