import { TodoForm, TodoList } from '@/components'
import useSWR from 'swr'
import { Todo } from '@prisma/client'
import { Header } from '@/components'
import { GetResponse } from '@/types/types'

export default function Home() {
  const fetchTodos = async (url: string): Promise<GetResponse<Todo[]>> => {
    const res = await fetch(url)
    return res.json()
  }

  const { data, error, isLoading } = useSWR<GetResponse<Todo[]>>(
    '/api/todos',
    fetchTodos
  )

  return (
    <main className={`flex h-screen flex-col`}>
      <Header text="Todo App" />
      <div
        id="add-todo"
        className="flex gap-2 flex-col w-full pt-4 px-8 pb-2 bg-gray-100 shadow-sm border-b-2 border-gray-200"
      >
        <div className="flex grow font-semibold text-lg">Add New Todo</div>
        <TodoForm />
      </div>
      <div className="flex overflow-y-auto h-full">
        <TodoList todos={data?.data} error={error} isLoading={isLoading} />
      </div>
    </main>
  )
}
