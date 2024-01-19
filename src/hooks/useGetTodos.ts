import { GetResponse } from '@/types/types'
import { Todo } from '@prisma/client'
import useSWR from 'swr'

/**
 * Custom hook for fetching a list of todos using SWR.
 *
 * @returns {Object} An SWR response object containing data and error state.
 */
const useGetTodos = () => {
  /**
   * Fetches a list of todos from the server.
   *
   * @param {string} url - The URL to fetch the todos from.
   * @returns {Promise<GetResponse<Todo[]>>} A promise that resolves with the fetched list of todos.
   */
  const fetchTodos = async (url: string): Promise<GetResponse<Todo[]>> => {
    const res = await fetch(url)
    return res.json()
  }

  return useSWR<GetResponse<Todo[]>>('/api/todos', fetchTodos)
}

export default useGetTodos
