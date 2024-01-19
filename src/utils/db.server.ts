/* eslint no-var: 0 */
import { PrismaClient, Prisma } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: PrismaClient | undefined
}

if (!global.prisma) {
  global.prisma = prismaClientSingleton()
}

export const db = global.prisma

export { Prisma }

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = global.prisma
}
