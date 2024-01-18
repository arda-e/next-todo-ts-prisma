import { Todo } from '@prisma/client'
import React from 'react'
import { useDeleteTodo } from './hooks'
import { TodoItem } from '..'
import { NoData, Loading } from '@/components'

interface TodoListProps {
  todos?: Todo[]
  isLoading?: boolean
  error?: unknown //TODO: Fix error type
}

const TodoList = (props: TodoListProps) => {
  const { todos, error } = props
  const isLoading = true
  console.log('todos', todos)

  const deleteTodo = useDeleteTodo()

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id)
  }

  // TODO: Design & implement a better ui for error & loading states
  if (error) return <div>Failed to load todos.</div>
  if (isLoading) return <Loading />
  if (todos?.length == 0) return <NoData />

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
