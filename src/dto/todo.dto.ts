import { z } from 'zod'

export const createTodoDto = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
})

export const updateTodoDto = z.object({
  id: z.coerce.number().int().positive(),
  name: z.string().min(1, 'Name is required').optional(),
  description: z.string().optional(),
})

export const deleteTodoDto = z.object({
  id: z.coerce.number().int().positive(),
})

export const findTodoDto = z.object({
  id: z.coerce.number().int().positive(),
})
