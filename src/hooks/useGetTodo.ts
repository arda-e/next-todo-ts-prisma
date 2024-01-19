import { GetResponse } from '@/types/types'
import { Todo } from '@prisma/client'
import useSWR from 'swr'

const useGetTodo = (id: string) => {
  const fetchTodo = async (url: string): Promise<GetResponse<Todo>> => {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch todo')
    }
    return res.json()
  }

  return useSWR<GetResponse<Todo>>(id ? `/api/todos/${id}` : null, fetchTodo)
}

export default useGetTodo
