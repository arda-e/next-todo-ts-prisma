import { Todo } from '@prisma/client'
import React from 'react'

interface TodoListProps {
  todos?: Todo[]
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props
  console.log('todos', todos)
  return (
    <>
      <div id="todo-list">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <ul className="list-disc">
          {todos?.map((todo) => <li key={todo.id}>{todo.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default TodoList
