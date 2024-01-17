import { Todo } from '@prisma/client'

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
