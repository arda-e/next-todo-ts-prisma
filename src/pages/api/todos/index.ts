// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTodoDto } from '@/dto'
import { db, Prisma } from '@/utils/db.server'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ZodError } from 'zod'

const { PrismaClientKnownRequestError } = Prisma

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todos = await db.todo.findMany()
    return res.status(200).json({
      success: true,
      data: todos,
      message: 'Todos fetched successfully',
    })
  } catch (error: unknown) {
    return res
      .status(500)
      .json({ success: false, error: 'Internal server error' })
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validatedRequest = createTodoDto.parse(req.body)
    const newTodo = await db.todo.create({ data: validatedRequest })
    res.status(201).json({
      success: true,
      data: newTodo,
      message: 'Todo created successfully',
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
      if (error.code === 'P2002') {
        return res.status(409).json({
          success: false,
          error: 'A todo with the same identifier already exists',
        })
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
    case 'POST':
      await handlePOST(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
