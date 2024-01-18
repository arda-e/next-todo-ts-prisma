import { Todo } from '@prisma/client'
import React from 'react'
import { useDeleteTodo } from './hooks'
import { TodoItem } from '..'

interface TodoListProps {
  todos?: Todo[]
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props
  console.log('todos', todos)

  const deleteTodo = useDeleteTodo()

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id)
  }
  return (
    <>
      <div id="todo-list">
        <h1>Todo List</h1>
        <ul className="list-disc">
          {todos?.map((todo) => (
            <TodoItem
              handleDeleteTodo={() => handleDeleteTodo(todo.id)}
              key={todo.id}
              description={todo.description}
              name={todo.name}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList
