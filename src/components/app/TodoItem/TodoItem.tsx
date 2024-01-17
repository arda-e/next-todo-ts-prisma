import { Todo } from '@prisma/client'
import React from 'react'

const TodoItem = (props: Todo) => {
  return (
    <>
      <div id="todo-item">
        <div id="todo-item-name">{props.name}</div>
        <div id="todo-item-description">{props.description}</div>
        <div id="todo-time">
          <div id="todo-item-created-at">{props.createdAt.toString()}</div>
          <div id="todo-item-updated-at">{props.updatedAt.toString()}</div>
        </div>
      </div>
    </>
  )
}

export default TodoItem
