// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const todos = await prisma.todo.findMany()
  res.json(todos)
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { name, description } = req.body
  const newTodo = await prisma.todo.create({
    data: { name, description },
  })
  res.json(newTodo)
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
