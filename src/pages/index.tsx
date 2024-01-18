import { Button, TodoList } from '@/components'
import useSWR from 'swr'
import { Todo } from '@prisma/client'
import { useRouter } from 'next/router'

interface GetResponse<T> {
  success: boolean
  data: T[]
  message: string
}

export default function Home() {
  const router = useRouter()

  // TODO: Create a custom hook for fetching data
  const fetchTodos = async (url: string): Promise<GetResponse<Todo>> => {
    const res = await fetch(url)
    return res.json()
  }

  const { data, error, isLoading } = useSWR<GetResponse<Todo>>(
    '/api/todos',
    fetchTodos
  )

  const handleNavigateToAddTodoPage = () => {
    router.push('/add-todo')
  }

  // TODO: Design & implement a better ui for error & loading states
  if (error) return <div>Failed to load todos.</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Button
        text="Add Todo"
        type="button"
        disabled={isLoading}
        onclick={handleNavigateToAddTodoPage}
      />
      <TodoList todos={data?.data} />
    </main>
  )
}
