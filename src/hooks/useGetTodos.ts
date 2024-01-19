import { GetResponse } from '@/types/types'
import { Todo } from '@prisma/client'
import useSWR from 'swr'

const useGetTodos = () => {
  const fetchTodos = async (url: string): Promise<GetResponse<Todo[]>> => {
    const res = await fetch(url)
    return res.json()
  }

  return useSWR<GetResponse<Todo[]>>('/api/todos', fetchTodos)
}

export default useGetTodos
