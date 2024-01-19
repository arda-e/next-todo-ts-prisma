import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from '..'
import { NoData, Loading, Error } from '@/components'
import { useRouter } from 'next/router'

interface TodoListProps {
  todos?: Todo[]
  isLoading?: boolean
  error?: unknown //TODO: Fix error type
}

const TodoList = (props: TodoListProps) => {
  const { todos, error, isLoading } = props

  const router = useRouter()

  const handleEditTodo = async (id: number) => {
    router.push(`/todos/${id}`)
  }

  if (error) return <Error />
  if (isLoading) return <Loading />
  if (todos?.length == 0) return <NoData />

  return (
    <>
      <div
        id="todo-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min px-8 py-6 gap-4 w-full"
      >
        {todos?.map((todo) => (
          <TodoItem
            handleEditTodo={() => handleEditTodo(todo.id)}
            key={todo.id}
            description={todo.description}
            name={todo.name}
            createdAt={todo.createdAt}
            updatedAt={todo.updatedAt}
          />
        ))}
      </div>
    </>
  )
}

export default TodoList
