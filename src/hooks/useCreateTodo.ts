import { Todo } from '@prisma/client'
/**
 * Custom hook for creating a new todo.
 *
 * @returns {function} A function to create a new todo.
 *
 * @param {Object} data - The todo data to create, excluding 'id', 'createdAt', and 'updatedAt'.
 * @param {string} data.title - The title of the todo.
 * @param {string} data.description - The description of the todo.
 *
 * @throws {Error} If an error occurs during the creation process.
 *
 * @returns {Promise<Todo>} A promise that resolves with the newly created todo.
 */
const useCreateTodo = () => {
  const createTodo = async (
    data: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Error creating todo')
      }

      const newTodo = await res.json()
      return newTodo
    } catch (error) {
      throw error
    }
  }

  return createTodo
}

export default useCreateTodo
