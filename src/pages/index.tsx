import React from 'react'
// HOOKS
import { useGetTodos } from '@/hooks'
// COMPONENTS
import { Header, TodoFormContainer } from '@/components'
import { TodoForm, TodoList } from '@/components'

export default function Home() {
  const { data, error, isLoading } = useGetTodos()

  return (
    <main className="flex h-screen flex-col">
      <Header text="Todo App" type="home" />
      <TodoFormContainer>
        <TodoForm />
      </TodoFormContainer>
      <div className="flex overflow-y-auto h-full">
        <TodoList todos={data?.data} error={error} isLoading={isLoading} />
      </div>
    </main>
  )
}
