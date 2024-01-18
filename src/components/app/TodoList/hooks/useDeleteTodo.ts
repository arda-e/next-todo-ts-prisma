const useDeleteTodo = () => {
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`api/todos/${id}`, {
        method: 'DELETE',
      })
      if (response.status === 200) {
        return true
      }
      return false
    } catch (error) {
      console.error(error)
      return false
    }
  }
  return deleteTodo
}

export default useDeleteTodo
