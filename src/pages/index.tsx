import { TodoList } from '@/components'
import useSWR from 'swr'
import { Todo } from '@prisma/client'

interface GetResponse<T> {
  success: boolean
  data: T[]
  message: string
}

export default function Home() {
  const fetchTodos = async (url: string): Promise<GetResponse<Todo>> => {
    const res = await fetch(url)
    return res.json()
  }

  const { data, error, isLoading } = useSWR<GetResponse<Todo>>(
    '/api/todos',
    fetchTodos
  )

  if (error) return <div>Failed to load todos.</div>
  if (!isLoading) return <div>Loading...</div>

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <TodoList todos={data?.data} />
    </main>
  )
}
