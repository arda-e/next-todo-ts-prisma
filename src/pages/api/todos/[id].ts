import { deleteTodoDto, findTodoDto, updateTodoDto } from '@/dto'
import { db, Prisma } from '@/utils/db.server'
import { NextApiRequest, NextApiResponse } from 'next'
import { ZodError } from 'zod'

const { PrismaClientKnownRequestError } = Prisma

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = findTodoDto.parse(req.query)
    const todo = await db.todo.findFirstOrThrow({ where: { id } })
    return res
      .status(200)
      .json({ success: true, data: todo, message: 'Todo fetched successfully' })
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        error: error.errors,
        message: 'Invalid request data',
      })
    }
    return res
      .status(500)
      .json({ success: false, error: 'Internal server error' })
  }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = deleteTodoDto.parse(req.query)
    await db.todo.delete({ where: { id } })
    return res
      .status(200)
      .json({ success: true, message: 'Todo deleted successfully' })
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        error: error.errors,
        message: 'Invalid request data',
      })
    }

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ success: false, error: 'Todo not found' })
      }
    }
    return res
      .status(500)
      .json({ success: false, error: 'Internal server error' })
  }
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = findTodoDto.parse(req.query)
    const data = updateTodoDto.parse(req.body)
    const updatedTodo = await db.todo.update({ where: { id }, data })
    return res.status(200).json({
      success: true,
      data: updatedTodo,
      message: 'Todo updated successfully',
    })
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        error: error.errors,
        message: 'Invalid request data',
      })
    }
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ success: false, error: 'Todo not found' })
      }
    }
    return res
      .status(500)
      .json({ success: false, error: 'Internal server error' })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      await handleGET(req, res)
      break
    case 'DELETE':
      await handleDelete(req, res)
      break
    case 'PUT':
      await handleUpdate(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
