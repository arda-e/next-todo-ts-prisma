import { z } from 'zod'

/**
 * Represents the data transfer object (DTO) for creating a new todo.
 *
 * @typedef {Object} CreateTodoDto
 * @property {string} name - The name of the todo (required).
 * @property {string} [description] - The description of the todo (optional).
 */
export const createTodoDto = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
})

/**
 * Represents the data transfer object (DTO) for updating an existing todo.
 *
 * @typedef {Object} UpdateTodoDto
 * @property {number} id - The ID of the todo to update (positive integer).
 * @property {string} [name] - The updated name of the todo (optional).
 * @property {string} [description] - The updated description of the todo (optional).
 */
export const updateTodoDto = z.object({
  id: z.coerce.number().int().positive(),
  name: z.string().min(1, 'Name is required').optional(),
  description: z.string().optional(),
})

/**
 * Represents the data transfer object (DTO) for deleting a todo.
 *
 * @typedef {Object} DeleteTodoDto
 * @property {number} id - The ID of the todo to delete (positive integer).
 */
export const deleteTodoDto = z.object({
  id: z.coerce.number().int().positive(),
})

/**
 * Represents the data transfer object (DTO) for finding a todo by its ID.
 *
 * @typedef {Object} FindTodoDto
 * @property {number} id - The ID of the todo to find (positive integer).
 */
export const findTodoDto = z.object({
  id: z.coerce.number().int().positive(),
})
