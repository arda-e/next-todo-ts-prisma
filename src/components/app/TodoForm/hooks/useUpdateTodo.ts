import { Todo } from '@prisma/client'

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

      if (!res.ok) {
        throw new Error('Error creating todo')
      }

      const updatedTodo = await res.json()
      return updatedTodo
    } catch (error) {
      throw error
    }
  }

  return updateTodo
}

export default useUpdateTodo
