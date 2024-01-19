import { TodoForm, TodoList } from '@/components'
import useSWR from 'swr'
import { Todo } from '@prisma/client'

// TODO: Move to a shared folder
export interface GetResponse<T> {
  success: boolean
  data: T
  message: string
}

export default function Home() {
  // TODO: Create a custom hook for fetching data
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
      <div
        id="add-todo-action-container"
        className="flex w-full items-center justify-between border-b-2 bg-white border-gray-200 shadow-sm p-4"
      >
        <h2 className="text-2xl font-semibold">Todo List</h2>
      </div>
      <div
        id="add-todo"
        className="flex gap-2 flex-col w-full pt-4 px-4 pb-2 bg-gray-100 shadow-sm border-b-2 border-gray-200"
      >
        <div className="flex grow font-semibold text-lg">Add New Todo</div>
        <TodoForm />
      </div>
      <div className="flex overflow-y-auto">
        <TodoList todos={data?.data} error={error} isLoading={isLoading} />
      </div>
    </main>
  )
}
