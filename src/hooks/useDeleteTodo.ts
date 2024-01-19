/**
 * Custom hook for deleting a todo item.
 * @returns {Object} An object containing the deleteTodo function.
 */
const useDeleteTodo = () => {
  /**
   * Deletes a todo item with the specified ID.
   * @param {number} id - The ID of the todo item to delete.
   * @returns {Promise} A promise that resolves when the delete request is complete.
   */
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
  }

  return { deleteTodo }
}

export default useDeleteTodo
