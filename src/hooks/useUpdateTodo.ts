import { Todo } from '@prisma/client'

/**
 * Custom hook for updating a todo by ID.
 *
 * @returns {function} A function to update a todo.
 *
 * @param {number} id - The ID of the todo to update.
 * @param {Object} data - The updated todo data, excluding 'createdAt' and 'updatedAt'.
 * @param {string} data.title - The updated title of the todo.
 * @param {string} data.description - The updated description of the todo.
 *
 * @throws {Error} If an error occurs during the update process.
 *
 * @returns {Promise<Todo>} A promise that resolves with the updated todo.
 */
const useUpdateTodo = () => {
  const updateTodo = async (
    id: number,
    data: Omit<Todo, 'createdAt' | 'updatedAt'>
  ) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const updatedTodo = await res.json()

      if (res.status !== 200) {
        throw new Error(`Error creating todo :${updatedTodo.message}`)
      }

      return updatedTodo
    } catch (error) {
      throw error
    }
  }

  return updateTodo
}

export default useUpdateTodo
