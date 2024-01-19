const useDeleteTodo = () => {
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
  }

  return { deleteTodo }
}

export default useDeleteTodo
