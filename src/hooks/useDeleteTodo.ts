import { useRouter } from 'next/router'

/**
 * Custom hook for deleting a todo item.
 * @returns {Object} An object containing the deleteTodo function.
 */
const useDeleteTodo = () => {
  const router = useRouter()
  /**
   * Deletes a todo item with the specified ID.
   * @param {number} id - The ID of the todo item to delete.
   * @returns {Promise} A promise that resolves when the delete request is complete.
   */
  const deleteTodo = async (id: number) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      })

      const data = await res.json()

      if (data.success === false) {
        throw new Error(`Failed to delete todo: ${data.message}`)
      }

      router.push('/')
    } catch (error) {
      console.error(error)
      router.push('/')
    }
  }

  return { deleteTodo }
}

export default useDeleteTodo
