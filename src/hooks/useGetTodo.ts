import { GetResponse } from '@/types/types'
import { Todo } from '@prisma/client'
import useSWR from 'swr'

/**
 * Custom hook for fetching a todo by its ID using SWR.
 *
 * @param {string} id - The ID of the todo to fetch.
 * @returns {Object} An SWR response object containing data and error state.
 */
const useGetTodo = (id: string) => {
  /**
   * Fetches a todo by its ID from the server.
   *
   * @param {string} url - The URL to fetch the todo from.
   * @returns {Promise<GetResponse<Todo>>} A promise that resolves with the fetched todo data.
   * @throws {Error} If the fetch operation fails.
   */
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
